import {TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import LessonCard from './LessonCard';
import {Lesson} from '../../screens/types';

interface LessonListProps {
  lessons: Array<Lesson>;
}

const ArticleList = ({lessons}: LessonListProps) => {
  return (
    <FlatList
      data={lessons}
      renderItem={({item}) => (
        <TouchableOpacity>
          <LessonCard lesson={item} />
        </TouchableOpacity>
      )}
    />
  );
};

export default ArticleList;
