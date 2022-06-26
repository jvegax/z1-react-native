import {Lesson} from '../components/Lesson/types';

export const normalizeLessonsFromAPI = (response: any): Array<Lesson> => {
  return response.map((lesson: any): Lesson => {
    return {
      id: lesson.id,
      title: lesson.title,
      image: lesson.image,
      author: lesson?.author,
      category: lesson.category.title,
      content: lesson.content,
    };
  });
};

export const normalizeSingleLesson = (response: any): Lesson => {
  return {
    id: response.id,
    title: response.title,
    image: response.image,
    author: response?.author,
    category: response.category,
    content: response.content,
  };
};
