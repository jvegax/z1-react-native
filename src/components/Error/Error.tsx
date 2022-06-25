import {Text, View} from 'react-native';
import React from 'react';
import {ApolloError} from '@apollo/client';

interface ErrorProps {
  children: ApolloError | undefined;
}

const Error = ({children}: ErrorProps) => {
  return (
    <View>
      <Text>Ops! Something went wrong: {children}</Text>
    </View>
  );
};

export default Error;
