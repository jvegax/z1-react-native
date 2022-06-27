import {Text, View} from 'react-native';
import React from 'react';
import {ErrorProps} from './types';

const Error = ({children}: ErrorProps) => {
  return (
    <View>
      <Text>Ops! Something went wrong: {children?.message}</Text>
    </View>
  );
};

export default Error;
