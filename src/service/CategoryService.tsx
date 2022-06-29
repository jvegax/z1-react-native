import {Category} from '../components/Category/enums';
import {Lesson} from '../components/Lesson/types';

export const filterByCategoryName = (
  categoryName: string,
  lessons: Array<Lesson>,
): Array<Lesson> => {
  if (categoryName === Category.All) {
    return lessons;
  }
  return lessons.filter(lesson => lesson.category === categoryName);
};

export const getAllCategories = (): Category[] => {
  return Object.values(Category).map(category => category);
};
