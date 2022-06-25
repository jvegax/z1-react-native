import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const categories = ['All', 'Favourites ❤️', 'Mindfulness', 'Tripping'];

const CategoryList = () => {
  return (
    <View style={styles.categoryContainer}>
      {categories.map(category => (
        <Text style={styles.categoryText}>{category}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  categoryText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#ffffffcc',
  },
});

export default CategoryList;
