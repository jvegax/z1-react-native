import {Lesson} from '../screens/types';

export const filterByCategoryName = (
  name: String,
  lessons: Array<Lesson>,
): Array<Lesson> => {
  if (name === 'All') {
    return lessons;
  }
  return lessons.filter(lesson => lesson.category.title === name);
};

export const getAllCategories = () => {
  const categories = [
    'All',
    'Favourites ❤️',
    'Harm Reduction',
    'Integration',
    'Mindfulness',
    'Tripping',
  ];
  return categories;
};
