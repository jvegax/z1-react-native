import {FlatList} from 'react-native';
import React from 'react';
import * as categoryService from '../../service/CategoryService';
import Category from './Category';

const CategoryMenu = ({filterByCategory}) => {
  const categories = categoryService.getAllCategories();
  return (
    <FlatList
      horizontal={true}
      data={categories}
      renderItem={({item}) => (
        <Category category={item} filterByCategory={filterByCategory} />
      )}
    />
  );
};

export default CategoryMenu;
