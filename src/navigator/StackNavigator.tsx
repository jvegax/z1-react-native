import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Learn',
          headerStyle: {
            backgroundColor: '#320D51',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 26,
            letterSpacing: 1,
          },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
