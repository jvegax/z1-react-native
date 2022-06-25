import {Text, View, Image} from 'react-native';
import React from 'react';
import globalStyles from '../../styles/global';

const ReviewCard = ({review}) => {
  return (
    <View style={globalStyles.reviewCardContainer}>
      <Image
        style={globalStyles.reviewCardImage}
        source={{
          uri: review.image,
        }}
      />
      <View style={globalStyles.reviewCardContent}>
        <Text style={globalStyles.reviewCardCategory}>
          {review.category.title}
        </Text>
        <Text style={globalStyles.reviewCardTitle}>{review.title}</Text>
        <View style={globalStyles.authorContainer}>
          <Text style={globalStyles.reviewCardAuthor}>{review.author}</Text>
        </View>
      </View>
    </View>
  );
};

export default ReviewCard;
