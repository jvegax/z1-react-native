import {FlatList} from 'react-native';
import React from 'react';

import * as categoryService from '../../service/CategoryService';
import Category from './Category';
import {CategoryMenuProps} from './types';

const CategoryMenu = ({filterLesson}: CategoryMenuProps) => {
  const categories = categoryService.getAllCategories();
  return (
    <FlatList
      horizontal={true}
      data={categories}
      renderItem={({item}) => (
        <Category category={item} filterLesson={filterLesson} />
      )}
    />
  );
};

export default CategoryMenu;
