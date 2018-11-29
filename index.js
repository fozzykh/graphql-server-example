import express from 'express';
import bodyParser from 'body-parser';
import {
  ApolloServer,
  gql
} from 'apollo-server-express';

import schema from './schemas';

const GRAPHQL_PORT = 3101;
const apolloServer = new ApolloServer({schema});
const graphQlServer = new express();

apolloServer.applyMiddleware({ app: graphQlServer });

graphQlServer.listen(GRAPHQL_PORT, () => {
  console.log(`I AM THE GRAPHQL SERVER AND I AM LISTENNING ON http://localhost:3101${apolloServer.graphqlPath}`);
});
