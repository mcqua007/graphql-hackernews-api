const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');


//resolvers 
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const Subscription = require('./resolvers/Subscription');;
const User = require('./resolvers/User');
const Task = require('./resolvers/Task');
const Todo = require('./resolvers/Todo');



const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
  Task,
  Todo,
};



const server = new GraphQLServer({
  typeDefs: '../src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
    }
  },
})
server.start(() => console.log('Server is running on http://localhost:4000'));