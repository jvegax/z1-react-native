import {TouchableOpacity, Text} from 'react-native';
import React from 'react';

import globalStyles from '../../styles/global';
import {CategoryProps} from './types';

const Category = ({category, filterLesson}: CategoryProps) => {
  const handleChange = () => {
    filterLesson(category);
  };
  return (
    <TouchableOpacity onPress={handleChange}>
      <Text style={globalStyles.categoryMenuText}>{category}</Text>
    </TouchableOpacity>
  );
};

export default Category;
