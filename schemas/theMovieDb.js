import { gql } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { createApolloFetch } from 'apollo-fetch';

const apolloFetch = createApolloFetch({
  uri: 'https://movie-database-graphql-qwqnwstigc.now.sh/graphql',
});

export const typeDefs = gql`

  type Query {
    getMovie(id: Int): Movie
    getGenres: [Genre]
    getMoviesByGenre(id: Int): [Movie]
  }

  type Movie {
    id: Int
    title: String
    poster_path: String,
    budget: Int
  }

  type Genre {
    id: Int
    name: String
  }

`;

export const resolvers = {
  Query: {
    getMovie: (_, args) => apolloFetch({
        query: `{ movie(id: ${args.id}) {
            id,
            title,
            poster_path,
            budget
          }
        }`
      }).then(result => result.data.movie),

    getGenres: () => apolloFetch({
      query: `{
        movie_genres {
          id,
          name
        }
      }`
    }).then(movieGenres => movieGenres.data.movie_genres),

    getMoviesByGenre: (_, args) => apolloFetch({
      query: `{
        movies_by_genre(id: ${args.id}) {
          title
          id
          poster_path
          budget
        }
      }`
    }).then(movies => movies.data.movies_by_genre)
  },
}
