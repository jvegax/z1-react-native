import {View} from 'react-native';
import {useQuery} from '@apollo/client';
import React, {useEffect, useState} from 'react';
import Spinner from '../components/Spinner/Spinner';
import Error from '../components/Error/Error';
import CategoryMenu from '../components/Category/CategoryMenu';

import * as lessonRepo from '../repository/lessonQueryRepository';
import * as CategoryService from '../service/CategoryService';
import {HomeState} from './types';
import {normalizeLessonsFromAPI} from '../utils/lessonUtils';
import LessonList from '../components/Lesson/LessonList';
import {MainContainer} from '../styled-components/shared';
import {LessonContainer} from '../styled-components/lesson';
import {CategoryMenuContainer} from '../styled-components/category';

const HomeScreen = ({navigation}: any) => {
  const {loading, error, data} = useQuery(lessonRepo.GET_LESSONS);
  const [lessons, setLessons] = useState<HomeState['lessons']>([]);

  // Load initial state
  useEffect(() => {
    if (!loading && !error && data) {
      setLessons(normalizeLessonsFromAPI(data.items));
    }
  }, [data, loading, error]);

  // Filter lessons by category name
  const filterLesson = (name: string): void => {
    setLessons(
      CategoryService.filterByCategoryName(
        name,
        normalizeLessonsFromAPI(data.items),
      ),
    );
  };

  // Spinner when loading...
  if (loading) {
    return <Spinner />;
  }

  // Error messages
  if (error) {
    return <Error>{error}</Error>;
  }

  return (
    <MainContainer>
      <View>
        <CategoryMenuContainer>
          <CategoryMenu filterLesson={filterLesson} />
        </CategoryMenuContainer>
        <LessonContainer>
          <LessonList lessons={lessons} navigation={navigation} />
        </LessonContainer>
      </View>
    </MainContainer>
  );
};

export default HomeScreen;
