import {TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import LessonCard from './LessonCard';
import {LessonListProps} from './types';

const LessonList = ({lessons, navigation}: LessonListProps) => {
  return (
    <FlatList
      data={lessons}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
          <LessonCard lesson={item} />
        </TouchableOpacity>
      )}
    />
  );
};

export default LessonList;
