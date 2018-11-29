import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';

import {
  typeDefs as sampleDefs,
  resolvers as sampleResolvers
} from './theMovieDb';

import {
  typeDefs as ottDefs,
  resolvers as ottResolvers
} from './ottSchema';


export default makeExecutableSchema({
  typeDefs: [sampleDefs, ottDefs],
  resolvers: merge(sampleResolvers, ottResolvers),
});
