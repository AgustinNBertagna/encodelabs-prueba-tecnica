export default `
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }

  type UsersPayload {
    users: [User]
    error: String
  }

  type UserPayload {
    user: User
    error: String
  }

  type MutationUserPayload {
    id: String
    error: String
  }

  type Query {
    users: UsersPayload
    user(id: ID!): UserPayload
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): MutationUserPayload
    updateUser(id: ID!, name: String, email: String, password: String): MutationUserPayload
    deleteUser(id: ID!): MutationUserPayload
  }
`;
