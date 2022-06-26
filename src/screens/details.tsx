import React from 'react';

import LessonDetails from '../components/Lesson/LessonDetails';
import {normalizeSingleLesson} from '../utils/lessonUtils';
import {DetailsScreenProps} from './types';

const LessonDetailsScreen = ({route}: DetailsScreenProps) => {
  return <LessonDetails lesson={normalizeSingleLesson(route.params)} />;
};

export default LessonDetailsScreen;
