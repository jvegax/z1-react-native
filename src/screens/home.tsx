import React, {useEffect, useState} from 'react';

import {MainContainer} from '../styled-components/shared';
import {LessonListContainer} from '../styled-components/lesson';
import {CategoryMenuContainer} from '../styled-components/category';
import {HomeProps, LessonState} from './types';
import CategoryMenu from '../components/Category/CategoryMenu';
import LessonList from '../components/Lesson/LessonList';
import useLessonList from '../hooks/useLessonList';
import * as CategoryService from '../service/CategoryService';

const HomeScreen = ({navigation}: HomeProps) => {
  const {lessons} = useLessonList();
  const [filteredLessons, setFilteredLessons] = useState<
    LessonState['filteredLessons']
  >([]);
  // const [selectedCategory, setSelectedCategory] =
  //   useState<LessonState['selectedCategory']>(null);

  useEffect(() => {
    setFilteredLessons(lessons);
  }, [lessons]);

  const filterLesson = (name: string): void => {
    setFilteredLessons(CategoryService.filterByCategoryName(name, lessons));
  };

  return (
    <MainContainer>
      <CategoryMenuContainer>
        <CategoryMenu filterLesson={filterLesson} />
      </CategoryMenuContainer>
      <LessonListContainer>
        <LessonList lessons={filteredLessons} navigation={navigation} />
      </LessonListContainer>
    </MainContainer>
  );
};

export default HomeScreen;
