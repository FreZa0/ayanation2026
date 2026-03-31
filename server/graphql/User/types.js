export default `
  type User {
    id: ID!
    login: String!
    createdAt: String!
    updatedAt: String!
  }

  input StringFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    contains: String
    startsWith: String
    endsWith: String
    not: String
  }

  input IDFilter {
    equals: ID
    in: [ID!]
    notIn: [ID!]
    not: ID
  }

  input UserWhereInput {
    id: IDFilter
    login: StringFilter
    AND: [UserWhereInput!]
    OR: [UserWhereInput!]
    NOT: [UserWhereInput!]
  }

  input UserOrderByWithRelationInput {
    id: SortOrder
    login: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input UserOrderByWithAggregationInput {
    id: SortOrder
    login: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    _count: SortOrder
    _min: UserMinOrderByAggregateInput
    _max: UserMaxOrderByAggregateInput
  }

  input UserMinOrderByAggregateInput {
    id: SortOrder
    login: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input UserMaxOrderByAggregateInput {
    id: SortOrder
    login: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input UserCreateInput {
    login: String!
    password: String!
  }

  input UserUpdateInput {
    login: String
    password: String
  }

  input UserUpdateManyMutationInput {
    login: String
    password: String
  }

  input UserUncheckedCreateInput {
    id: ID
    login: String!
    password: String!
  }

  input UserUncheckedUpdateInput {
    id: ID
    login: String
    password: String
  }

  input UserUncheckedUpdateManyInput {
    id: ID
    login: String
    password: String
  }

  type UserCountAggregate {
    id: Int!
    login: Int!
    createdAt: Int!
    updatedAt: Int!
    _all: Int!
  }

  type UserMinAggregate {
    id: ID
    login: String
    createdAt: String
    updatedAt: String
  }

  type UserMaxAggregate {
    id: ID
    login: String
    createdAt: String
    updatedAt: String
  }

  type AggregateUser {
    count: UserCountAggregate
    min: UserMinAggregate
    max: UserMaxAggregate
  }

  input UserWhereUniqueInput {
    id: ID
    login: String
  }

  enum UserScalarFieldEnum {
    id
    login
    createdAt
    updatedAt
  }

  type UserGroupByOutputType {
    id: ID!
    login: String!
    createdAt: String!
    updatedAt: String!
    _count: UserCountAggregateOutputType
    _min: UserMinAggregateOutputType
    _max: UserMaxAggregateOutputType
  }

  type UserCountAggregateOutputType {
    id: Int!
    login: Int!
    createdAt: Int!
    updatedAt: Int!
    _all: Int!
  }

  type UserMinAggregateOutputType {
    id: ID
    login: String
    createdAt: String
    updatedAt: String
  }

  type UserMaxAggregateOutputType {
    id: ID
    login: String
    createdAt: String
    updatedAt: String
  }
`
