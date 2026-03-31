import UserQueries from './User/queries.js'
import UserMutations from './User/mutations.js'

export default {
  Query: {
    ...UserQueries.Query,
  },
  Mutation: {
    ...UserMutations.Mutation,
  },
}
