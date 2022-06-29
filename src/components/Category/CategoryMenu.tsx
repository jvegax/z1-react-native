import {FlatList} from 'react-native';
import React from 'react';

import * as categoryService from '../../service/CategoryService';
import Category from './Category';
import {CategoryMenuProps} from './types';
import {CategoryMenuContainer} from '../../styled-components/category';

const CategoryMenu = ({
  selectedCategory,
  handleSelectCategory,
}: CategoryMenuProps) => {
  const categories = categoryService.getAllCategories();

  return (
    <CategoryMenuContainer>
      <FlatList
        horizontal={true}
        data={categories}
        renderItem={({item}) => (
          <Category
            category={item}
            selectedCategory={selectedCategory}
            handleSelectCategory={handleSelectCategory}
          />
        )}
      />
    </CategoryMenuContainer>
  );
};

export default CategoryMenu;
