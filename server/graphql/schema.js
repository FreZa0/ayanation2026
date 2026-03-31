import enumTypes from './User/enums.js'
import userTypes from './User/types.js'
import userQueries from './User/queries.js'
import userMutations from './User/mutations.js'

const typeDefs = `#graphql
  ${enumTypes}
  ${userTypes}
  ${userQueries}
  ${userMutations}
`

export default typeDefs
