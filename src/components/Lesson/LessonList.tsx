import {TouchableOpacity, FlatList} from 'react-native';
import React, {memo} from 'react';
import LessonCard from './LessonCard';
import {LessonListProps} from './types';
import {LessonListContainer} from '../../styled-components/lesson';

const LessonList = ({lessons, navigation}: LessonListProps) => {
  return (
    <LessonListContainer>
      <FlatList
        data={lessons}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Details', item)}>
            <LessonCard lesson={item} />
          </TouchableOpacity>
        )}
      />
    </LessonListContainer>
  );
};

export default memo(LessonList);
