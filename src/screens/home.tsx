import React, {useEffect, useState} from 'react';

import {HomeContainer} from '../styled-components/shared';
import {HomeProps, LessonState} from './types';
import CategoryMenu from '../components/Category/CategoryMenu';
import LessonList from '../components/Lesson/LessonList';
import useLessonList from '../hooks/useLessonList';
import * as CategoryService from '../service/CategoryService';
import LessonPlayer from '../components/Player/LessonPlayer';
import {Category} from '../components/Category/enums';

const HomeScreen = ({navigation}: HomeProps) => {
  const {lessons} = useLessonList();
  const [filteredLessons, setFilteredLessons] = useState<
    LessonState['filteredLessons']
  >([]);
  const [selectedCategory, setSelectedCategory] = useState<
    LessonState['selectedCategory']
  >(Category.All);

  useEffect(() => {
    setSelectedCategory(Category.All);
    setFilteredLessons(lessons);
  }, [lessons]);

  const handleSelectCategory = (newSelected: Category): void => {
    setFilteredLessons(
      CategoryService.filterByCategoryName(newSelected, lessons),
    );
    setSelectedCategory(newSelected);
  };

  return (
    <HomeContainer>
      <CategoryMenu
        selectedCategory={selectedCategory}
        handleSelectCategory={handleSelectCategory}
      />
      <LessonList lessons={filteredLessons} navigation={navigation} />
      <LessonPlayer />
    </HomeContainer>
  );
};

export default HomeScreen;
