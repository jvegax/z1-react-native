import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import globalStyles from '../../styles/global';

const Category = ({category, filterByCategory}) => {
  const handleChange = () => {
    filterByCategory(category);
  };
  return (
    <TouchableOpacity onPress={handleChange}>
      <Text style={globalStyles.categoryMenuText}>{category}</Text>
    </TouchableOpacity>
  );
};

export default Category;
