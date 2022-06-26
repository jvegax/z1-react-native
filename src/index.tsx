import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {ApolloProvider} from '@apollo/client';

import {apolloClient} from './apollo/apolloConfiguration';
import MyStack from './navigator/StackNavigator';

const AppZ1 = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#320D51" />
        <MyStack />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default AppZ1;
