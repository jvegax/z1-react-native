import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';

import globalStyles from '../../styles/global';
import {LessonProps} from './types';

const LessonDetails = ({lesson}: LessonProps) => {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.lessonDetailsContainer}>
        <View style={globalStyles.lessonDetailsInfoContainer}>
          <Text style={globalStyles.lessonDetailsCategory}>
            {lesson.category}
          </Text>
          <Text style={globalStyles.lessonDetailsTitle}>{lesson.title}</Text>
          <Text style={globalStyles.lessonDetailsAuthor}>{lesson.author}</Text>
        </View>
        <View style={globalStyles.lessonDetailsImageContainer}>
          <Image
            style={globalStyles.lessonDetailsImageContainer}
            source={{
              uri: lesson.image,
            }}
          />
        </View>
        <ScrollView style={globalStyles.lessonDetailsContentContainer}>
          <Text style={globalStyles.lessonDetailsDescriptionText}>
            {lesson.content}
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default LessonDetails;
