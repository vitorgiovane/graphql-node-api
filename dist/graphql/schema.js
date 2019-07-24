"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
let users = [
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
];
const typeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    allUsers: [ User! ]!
  }

  type Mutation {
    createUser(name: String!, email: String!): User
  }
`;
const resolvers = {
    User: {
        id: user => user.id,
        name: user => user.name,
        email: user => user.email
    },
    Query: {
        allUsers: () => users
    },
    Mutation: {
        createUser: (parent, args) => {
            const user = Object.assign({ id: users.length + 1 }, args);
            users.push(user);
            return user;
        }
    }
};
exports.default = graphql_tools_1.makeExecutableSchema({ typeDefs, resolvers });
