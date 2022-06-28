import React from 'react';

import {LessonProps} from './types';
import {
  LessonDetailsAuthor,
  LessonDetailsCardImage,
  LessonDetailsCategory,
  LessonDetailsContainer,
  LessonDetailsContentContainer,
  LessonDetailsDescriptionText,
  LessonDetailsInfoContainer,
  LessonDetailsTitle,
} from '../../styled-components/lesson';

const LessonDetails = ({lesson}: LessonProps) => {
  return (
    <LessonDetailsContainer>
      <LessonDetailsInfoContainer>
        <LessonDetailsCategory>{lesson.category}</LessonDetailsCategory>
        <LessonDetailsTitle>{lesson.title}</LessonDetailsTitle>
        <LessonDetailsAuthor>{lesson?.author}</LessonDetailsAuthor>
      </LessonDetailsInfoContainer>
      <LessonDetailsCardImage
        source={{
          uri: lesson.image,
        }}
      />
      <LessonDetailsContentContainer>
        <LessonDetailsDescriptionText>
          {lesson.content}
        </LessonDetailsDescriptionText>
      </LessonDetailsContentContainer>
    </LessonDetailsContainer>
  );
};

export default LessonDetails;
