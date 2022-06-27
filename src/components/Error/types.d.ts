import {ApolloError} from '@apollo/client';

interface ErrorProps {
  children: ApolloError | undefined;
}
