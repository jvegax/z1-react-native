import {ScrollView, Text} from 'react-native';
import React from 'react';
import itemData from '../data/db.json';

const Items = () => {
  return (
    <ScrollView>
      {itemData.map(item => (
        <Text key={item.id}>{item.author}</Text>
      ))}
    </ScrollView>
  );
};

export default Items;
