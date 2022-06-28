import React from 'react';
import {
  LessonPlayerContainer,
  LessonPlayerContent,
  LessonPlayerContentProgress,
  LessonPlayerContentTitle,
  LessonPlayerImage,
  LessonPlayerSoundImage,
  LessonPlayerSoundImageContainer,
} from '../../styled-components/lesson';
import {playerOptions} from '../../utils/lessonUtils';

const LessonPlayer = () => {
  return (
    <LessonPlayerContainer>
      <LessonPlayerImage
        source={{
          uri: playerOptions.image,
        }}
      />
      <LessonPlayerContent>
        <LessonPlayerContentTitle>
          {playerOptions.title}
        </LessonPlayerContentTitle>
        <LessonPlayerContentProgress>
          {playerOptions.progress}
        </LessonPlayerContentProgress>
      </LessonPlayerContent>
      <LessonPlayerSoundImageContainer>
        <LessonPlayerSoundImage
          source={{
            uri: playerOptions.audioImage,
          }}
        />
      </LessonPlayerSoundImageContainer>
    </LessonPlayerContainer>
  );
};

export default LessonPlayer;
