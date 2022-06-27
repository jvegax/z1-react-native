import React from 'react';

import {LessonProps} from './types';
import {
  AuthorContainer,
  LessonCardAuthor,
  LessonCardCategory,
  LessonCardContainer,
  LessonCardContent,
  LessonCardImage,
  LessonCardTitle,
} from '../../styled-components/lesson';

const LessonCard = ({lesson}: LessonProps) => {
  return (
    <LessonCardContainer>
      <LessonCardImage
        source={{
          uri: lesson.image,
        }}
      />
      <LessonCardContent>
        <LessonCardCategory>{lesson.category}</LessonCardCategory>
        <LessonCardTitle>{lesson.title}</LessonCardTitle>
        <AuthorContainer>
          <LessonCardAuthor>{lesson.author}</LessonCardAuthor>
        </AuthorContainer>
      </LessonCardContent>
    </LessonCardContainer>
  );
};

export default LessonCard;
