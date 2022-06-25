import {View} from 'react-native';
import {useQuery} from '@apollo/client';
import React, {useState} from 'react';

import globalStyles from '../styles/global';
import Spinner from '../components/Spinner/Spinner';
import Error from '../components/Error/Error';
import CategoryMenu from '../components/Category/CategoryMenu';
import ArticleList from '../components/Article/ArticleList';

import * as queryRepository from '../repository/ArticleRepository';
import * as CategoryService from '../service/CategoryService';

const HomeScreen = () => {
  const {loading, error, data} = useQuery(queryRepository.GET_ARTICLES);
  const [articles, setArticles] = useState([]);

  function filterByCategory(name) {
    setArticles(CategoryService.filterByCategoryName(name, data.items));
  }

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Error>{error}</Error>;
  }

  return (
    <View style={globalStyles.container}>
      <View>
        <View style={globalStyles.categoryMenuContainer}>
          <CategoryMenu filterByCategory={filterByCategory} />
        </View>
        <View style={globalStyles.reviewsContainer}>
          <ArticleList articles={articles} />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
