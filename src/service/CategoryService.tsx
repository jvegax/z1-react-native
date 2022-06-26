import {Lesson} from '../components/Lesson/types';

export const filterByCategoryName = (
  name: string,
  lessons: Array<Lesson>,
): Array<Lesson> => {
  if (name === 'All') {
    return lessons;
  }
  return lessons.filter(lesson => lesson.category === name);
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
