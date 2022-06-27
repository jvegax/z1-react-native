import {TouchableOpacity} from 'react-native';
import React from 'react';

import {CategoryProps} from './types';
import {StyledCategoryText} from '../../styled-components/category';

const Category = ({category, filterLesson}: CategoryProps) => {
  const handleChange = () => {
    filterLesson(category);
  };
  return (
    <TouchableOpacity onPress={handleChange}>
      <StyledCategoryText>{category}</StyledCategoryText>
    </TouchableOpacity>
  );
};

export default Category;
