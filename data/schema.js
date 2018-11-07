import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    """
      This is a query to test
    """
    movie(id: Int): Movie
    allMovies: [Movie]
  }

  type Movie {
    id: Int,
    name: String,
    coverImage: String
  }
`;

const sampleMovies = [
  {
    id: 1,
    name: 'Movie 1',
    coverImage: ''
  },
  {
    id: 2,
    name: 'Movie 2',
    coverImage: ''
  },
  {
    id: 3,
    name: 'Movie 3',
    coverImage: ''
  },
];

const resolvers = {
  Query: {
    movie: (id) => console.log(`Getting movie with ID ${id}`),
    allMovies: () => sampleMovies,
  }
}

export {
  typeDefs,
  resolvers
};
