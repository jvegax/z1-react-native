/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ItemList from './components/ItemList';
import CategoryList from './components/CategoryList';

const Main = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Learn</Text>
      </View>
      <View style={styles.body}>
        <CategoryList/>
        <ItemList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3c1b5c',
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  boldText: {
    fontSize: 36,
    color: '#ffffffcc',
    fontWeight: 'bold',
  },
  body: {
    padding: 20,
  },

});

export default Main;
