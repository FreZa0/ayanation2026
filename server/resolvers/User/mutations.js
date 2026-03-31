import User from '../../models/User.js'
import { buildWhereClause } from '../../utils/helpers.js'

export default {
  Mutation: {
    createOneUser: async (_, { data }) => {
      const user = new User(data)
      await user.save()
      return user
    },

    updateOneUser: async (_, { where, data }) => {
      const query = buildWhereClause(where)
      const updateData = {}

      if (data.login !== undefined) updateData.login = data.login
      if (data.password !== undefined) updateData.password = data.password

      return await User.findOneAndUpdate(query, updateData, { new: true })
    },

    upsertOneUser: async (_, { where, create, update }) => {
      const query = buildWhereClause(where)

      const existing = await User.findOne(query)

      if (existing) {
        const updateData = {}
        if (update.login !== undefined) updateData.login = update.login
        if (update.password !== undefined) updateData.password = update.password

        return await User.findOneAndUpdate(query, updateData, { new: true })
      } else {
        const user = new User(create)
        await user.save()
        return user
      }
    },

    deleteOneUser: async (_, { where }) => {
      const query = buildWhereClause(where)
      return await User.findOneAndDelete(query)
    },

    updateManyUser: async (_, { where, data }) => {
      const query = buildWhereClause(where)
      const updateData = {}

      if (data.login !== undefined) updateData.login = data.login
      if (data.password !== undefined) updateData.password = data.password

      const result = await User.updateMany(query, updateData)
      return result.modifiedCount || 0
    },

    deleteManyUser: async (_, { where }) => {
      const query = buildWhereClause(where)
      const result = await User.deleteMany(query)
      return result.deletedCount || 0
    },
  },
}
