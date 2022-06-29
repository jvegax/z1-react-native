import React, {useEffect, useState} from 'react';

import {HomeContainer} from '../styled-components/shared';
import {HomeProps, LessonState} from './types';
import CategoryMenu from '../components/Category/CategoryMenu';
import LessonList from '../components/Lesson/LessonList';
import useLessonList from '../hooks/useLessonList';
import * as CategoryService from '../service/CategoryService';
import LessonPlayer from '../components/Player/LessonPlayer';

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
    <HomeContainer>
      <CategoryMenu filterLesson={filterLesson} />
      <LessonList lessons={filteredLessons} navigation={navigation} />
      <LessonPlayer />
    </HomeContainer>
  );
};

export default HomeScreen;
