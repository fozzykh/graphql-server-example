import { gql } from 'apollo-server-express';

import getVideos from '../resolvers/getVideos';

export const typeDefs = gql`

  extend type Query {
    """
      Gets us all videos
    """
    getVideos: [Video]
  }

  """
    Represents a video element
  """
  type Video {
    id: Int
    image: String
    title: String
    duration: Int
    description: String
  }

`;

export const resolvers = {
  Query: {
    getVideos
  }
};
