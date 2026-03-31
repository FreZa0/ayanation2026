export default `
  type Query {
    findUniqueUser(where: UserWhereInput!): User
    findFirstUser(where: UserWhereInput, orderBy: [UserOrderByWithRelationInput!], cursor: UserWhereUniqueInput, take: Int, skip: Int): User
    findManyUser(where: UserWhereInput, orderBy: [UserOrderByWithRelationInput!], cursor: UserWhereUniqueInput, take: Int, skip: Int): [User!]!
    aggregateUser(where: UserWhereInput, orderBy: [UserOrderByWithRelationInput!], cursor: UserWhereUniqueInput, take: Int, skip: Int): AggregateUser!
    groupByUser(where: UserWhereInput, orderBy: [UserOrderByWithAggregationInput!], by: [UserScalarFieldEnum!]!): [UserGroupByOutputType!]!
    findCountUser(where: UserWhereInput): Int!
  }
`
