import User from '../../models/User.js'
import { buildWhereClause, buildOrderBy, buildAggregatePipeline } from '../../utils/helpers.js'

export default {
  Query: {
    findUniqueUser: async (_, { where }) => {
      if (!where) return null
      const query = buildWhereClause(where)
      return await User.findOne(query)
    },

    findFirstUser: async (_, { where, orderBy, cursor, take, skip }) => {
      const query = buildWhereClause(where)
      const sort = buildOrderBy(orderBy)

      let dbQuery = User.findOne(query).sort(sort)

      if (skip) {
        dbQuery = dbQuery.skip(skip)
      }

      return await dbQuery
    },

    findManyUser: async (_, { where, orderBy, cursor, take, skip }) => {
      const query = buildWhereClause(where)
      const sort = buildOrderBy(orderBy)

      let dbQuery = User.find(query).sort(sort)

      if (skip) {
        dbQuery = dbQuery.skip(skip)
      }

      if (take) {
        dbQuery = dbQuery.limit(take)
      }

      return await dbQuery
    },

    aggregateUser: async (_, { where, orderBy, cursor, take, skip }) => {
      const pipeline = buildAggregatePipeline(where, orderBy, cursor, take, skip)

      const countPipeline = [...pipeline, { $count: 'count' }]
      const minPipeline = [
        ...pipeline,
        { $group: { _id: null, id: { $min: '$_id' }, login: { $min: '$login' }, createdAt: { $min: '$createdAt' }, updatedAt: { $min: '$updatedAt' } } },
        { $project: { _id: 0, id: 1, login: 1, createdAt: 1, updatedAt: 1 } }
      ]
      const maxPipeline = [
        ...pipeline,
        { $group: { _id: null, id: { $max: '$_id' }, login: { $max: '$login' }, createdAt: { $max: '$createdAt' }, updatedAt: { $max: '$updatedAt' } } },
        { $project: { _id: 0, id: 1, login: 1, createdAt: 1, updatedAt: 1 } }
      ]

      const [countResult, minResult, maxResult] = await Promise.all([
        User.aggregate(countPipeline),
        User.aggregate(minPipeline),
        User.aggregate(maxPipeline)
      ])

      const count = countResult[0]?.count || 0
      const min = minResult[0] || null
      const max = maxResult[0] || null

      return {
        count: count > 0 ? {
          id: count,
          login: count,
          createdAt: count,
          updatedAt: count,
          _all: count
        } : null,
        min,
        max
      }
    },

    groupByUser: async (_, { where, orderBy, by }) => {
      const pipeline = []
      const whereClause = buildWhereClause(where)

      if (Object.keys(whereClause).length > 0) {
        pipeline.push({ $match: whereClause })
      }

      const groupFields = {}
      for (const field of by) {
        groupFields[field] = `$${field}`
      }

      pipeline.push({
        $group: {
          _id: groupFields,
          _count: { $sum: 1 },
          _min: {
            $min: '$$ROOT'
          },
          _max: {
            $max: '$$ROOT'
          }
        }
      })

      const result = await User.aggregate(pipeline)

      return result.map(item => ({
        ...item._id,
        _count: {
          id: item._count,
          login: item._count,
          createdAt: item._count,
          updatedAt: item._count,
          _all: item._count
        },
        _min: item._min,
        _max: item._max
      }))
    },

    findCountUser: async (_, { where }) => {
      const query = buildWhereClause(where)
      return await User.countDocuments(query)
    },
  },
}
