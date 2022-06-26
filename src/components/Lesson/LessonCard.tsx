import {Text, View, Image} from 'react-native';
import React from 'react';
import globalStyles from '../../styles/global';
import {Lesson} from '../../screens/types';

interface LessonCardProps {
  lesson: Lesson;
}

const LessonCard = ({lesson}: LessonCardProps) => {
  return (
    <View style={globalStyles.lessonCardContainer}>
      <Image
        style={globalStyles.lessonCardImage}
        source={{
          uri: lesson.image,
        }}
      />
      <View style={globalStyles.lessonCardContent}>
        <Text style={globalStyles.lessonCardCategory}>
          {lesson.category.title}
        </Text>
        <Text style={globalStyles.lessonCardTitle}>{lesson.title}</Text>
        <View style={globalStyles.authorContainer}>
          <Text style={globalStyles.lessonCardAuthor}>{lesson.author}</Text>
        </View>
      </View>
    </View>
  );
};

export default LessonCard;