import express from 'express';
import bodyParser from 'body-parser';
import {
  ApolloServer,
  gql
} from 'apollo-server-express';

import {
  resolvers,
  typeDefs
} from './data/schema';

const GRAPHQL_PORT = 3000;
const apolloServer = new ApolloServer({ typeDefs, resolvers });
const graphQlServer = new express();

apolloServer.applyMiddleware({ app: graphQlServer });

graphQlServer.listen(GRAPHQL_PORT, () => {
  console.log(`I AM THE GRAPHQL SERVER AND I AM LISTENNING ON http://localhost:3000${apolloServer.graphqlPath}`);
});
