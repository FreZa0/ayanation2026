export default `
  type Mutation {
    createOneUser(data: UserCreateInput!): User!
    updateOneUser(where: UserWhereUniqueInput!, data: UserUpdateInput!): User
    upsertOneUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
    deleteOneUser(where: UserWhereUniqueInput!): User
    updateManyUser(where: UserWhereInput, data: UserUpdateManyMutationInput!): Int!
    deleteManyUser(where: UserWhereInput): Int!
  }
`
