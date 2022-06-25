import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';

const Z1_GRAPHQL = 'https://tech.z1.digital/graphql';

const link = createHttpLink({uri: Z1_GRAPHQL});
const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  cache,
  link,
});
