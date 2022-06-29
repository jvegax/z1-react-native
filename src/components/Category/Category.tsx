import {TouchableOpacity} from 'react-native';
import React from 'react';

import {CategoryProps} from './types';
import {
  StyledCategoryTextDefault,
  StyledCategoryTextSelected,
} from '../../styled-components/category';

const Category = ({
  selectedCategory,
  category,
  handleSelectCategory,
}: CategoryProps) => {
  const handleChange = () => {
    handleSelectCategory(category);
  };

  const renderCategoryStyle = () => {
    if (selectedCategory === category) {
      return (
        <StyledCategoryTextSelected>{category}</StyledCategoryTextSelected>
      );
    } else {
      return <StyledCategoryTextDefault>{category}</StyledCategoryTextDefault>;
    }
  };

  return (
    <TouchableOpacity onPress={handleChange}>
      {renderCategoryStyle()}
    </TouchableOpacity>
  );
};

export default Category;
