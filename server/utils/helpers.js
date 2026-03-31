import mongoose from 'mongoose'

/**
 * Преобразует Prisma-like where в MongoDB query
 */
export const buildWhereClause = (where) => {
  if (!where) return {}

  const clause = {}
  const andClauses = []
  const orClauses = []
  const notClauses = []

  if (where.id) {
    if (where.id.equals) clause._id = where.id.equals
    else if (where.id.in) clause._id = { $in: where.id.in.map(id => new mongoose.Types.ObjectId(id)) }
    else if (where.id.notIn) clause._id = { $nin: where.id.notIn.map(id => new mongoose.Types.ObjectId(id)) }
    else if (where.id.not) clause._id = { $ne: where.id.not }
    else clause._id = where.id
  }

  if (where.login) {
    const loginFilter = {}
    if (where.login.equals) loginFilter.$eq = where.login.equals
    if (where.login.in) loginFilter.$in = where.login.in
    if (where.login.notIn) loginFilter.$nin = where.login.notIn
    if (where.login.contains) loginFilter.$regex = where.login.contains
    if (where.login.startsWith) loginFilter.$regex = `^${where.login.startsWith}`
    if (where.login.endsWith) loginFilter.$regex = `${where.login.endsWith}$`
    if (where.login.not) loginFilter.$ne = where.login.not

    if (Object.keys(loginFilter).length > 0) {
      clause.login = Object.keys(loginFilter).length === 1
        ? (loginFilter.$eq || loginFilter.$regex || loginFilter.$ne)
        : loginFilter
    }
  }

  if (where.AND && Array.isArray(where.AND)) {
    andClauses.push(...where.AND.map(w => buildWhereClause(w)))
  }

  if (where.OR && Array.isArray(where.OR)) {
    orClauses.push(...where.OR.map(w => buildWhereClause(w)))
  }

  if (where.NOT && Array.isArray(where.NOT)) {
    notClauses.push(...where.NOT.map(w => buildWhereClause(w)))
  }

  if (andClauses.length > 0) clause.$and = andClauses
  if (orClauses.length > 0) clause.$or = orClauses
  if (notClauses.length > 0) {
    clause.$and = [...(clause.$and || []), ...notClauses.map(c => ({ $nor: [c] }))]
  }

  return clause
}

/**
 * Преобразует Prisma-like orderBy в MongoDB sort
 */
export const buildOrderBy = (orderBy) => {
  if (!orderBy || orderBy.length === 0) return { createdAt: -1 }

  const order = {}
  for (const item of orderBy) {
    for (const [key, value] of Object.entries(item)) {
      if (value === 'asc') order[key] = 1
      else if (value === 'desc') order[key] = -1
    }
  }
  return order
}

/**
 * Преобразует cursor в MongoDB query
 */
export const buildCursorQuery = (cursor, schemaFields) => {
  if (!cursor) return {}
  const query = {}
  for (const [key, value] of Object.entries(cursor)) {
    if (schemaFields.includes(key)) {
      query[key] = value
    }
  }
  return query
}

/**
 * Helper для агрегаций
 */
export const buildAggregatePipeline = (where, orderBy, cursor, take, skip) => {
  const pipeline = []
  const whereClause = buildWhereClause(where)

  if (Object.keys(whereClause).length > 0) {
    pipeline.push({ $match: whereClause })
  }

  const sortStage = {}
  if (orderBy && orderBy.length > 0) {
    for (const item of orderBy) {
      for (const [key, value] of Object.entries(item)) {
        sortStage[key] = value === 'asc' ? 1 : -1
      }
    }
  } else {
    sortStage.createdAt = -1
  }

  if (Object.keys(sortStage).length > 0) {
    pipeline.push({ $sort: sortStage })
  }

  if (cursor) {
    // Cursor-based pagination logic can be added here
  }

  if (skip) {
    pipeline.push({ $skip: skip })
  }

  if (take) {
    pipeline.push({ $limit: take })
  }

  return pipeline
}
