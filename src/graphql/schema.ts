import { makeExecutableSchema } from "graphql-tools"

let users: any[] = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@email.com"
  },
  {
    id: 2,
    name: "Maria Doe",
    email: "mariadoe@email.com"
  }
]

const typeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    allUsers: [ User! ]!
  }
`

const resolvers = {
  Query: {
    allUsers: () => users
  },
  Mutation: {
    createUser: (parent, args) => {
      const user = Object.assign({ id: users.length + 1 }, args)
      users.push(user)
      return user
    }
  }
}

export default makeExecutableSchema({ typeDefs, resolvers })
