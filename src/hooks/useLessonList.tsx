import {useEffect, useState} from 'react';
import {useQuery} from '@apollo/client';

import {normalizeLessonsFromAPI} from '../utils/lessonUtils';
import {LessonState} from '../screens/types';
import * as lessonRepo from '../repository/lessonQueryRepository';
import {useLessonListProps} from './types';

const useLessonList = (): useLessonListProps => {
  const {loading, error, data} = useQuery(lessonRepo.GET_LESSONS);
  const [lessons, setLessons] = useState<LessonState['lessons']>([]);

  useEffect(() => {
    if (!loading && !error && data) {
      setLessons(normalizeLessonsFromAPI(data.items));
    }
  }, [data, loading, error]);

  return {
    lessons,
  };
};

export default useLessonList;
