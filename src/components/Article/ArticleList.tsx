import {TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import ReviewCard from './ReviewCard';

const ArticleList = ({articles}) => {
  return (
    <FlatList
      data={articles}
      renderItem={({item}) => (
        <TouchableOpacity>
          <ReviewCard review={item} />
        </TouchableOpacity>
      )}
    />
  );
};

export default ArticleList;
