import {View} from 'react-native';
import {useQuery} from '@apollo/client';
import React, {useEffect, useState} from 'react';

import globalStyles from '../styles/global';
import Spinner from '../components/Spinner/Spinner';
import Error from '../components/Error/Error';
import CategoryMenu from '../components/Category/CategoryMenu';

import * as queryRepository from '../repository/lessonQueryRepository';
import * as CategoryService from '../service/CategoryService';
import {HomeState} from './types';
import {normalizeLessonsFromAPI} from '../utils/lessonUtils';
import LessonList from '../components/Lesson/LessonList';

const HomeScreen = ({navigation}: any) => {
  const {loading, error, data} = useQuery(queryRepository.GET_LESSONS);
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
    <View style={globalStyles.container}>
      <View>
        <View style={globalStyles.categoryMenuContainer}>
          <CategoryMenu filterLesson={filterLesson} />
        </View>
        <View style={globalStyles.lessonContainer}>
          <LessonList lessons={lessons} navigation={navigation} />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
