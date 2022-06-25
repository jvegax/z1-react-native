import {gql} from '@apollo/client';

export const GET_ARTICLES = gql`
  query {
    items {
      id
      title
      image
      author
      category {
        title
      }
      content
    }
  }
`;
