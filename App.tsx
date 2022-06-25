/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import Main from './src';

import {apolloClient} from './src/apollo/apolloConfiguration';
import {ApolloProvider} from '@apollo/client';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <StatusBar barStyle="light-content" backgroundColor="#320D51" />
      <Main />
    </ApolloProvider>
  );
};

export default App;
