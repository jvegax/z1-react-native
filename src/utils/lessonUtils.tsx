import {Lesson} from '../components/Lesson/types';

export const normalizeLessonsFromAPI = (response: any): Array<Lesson> => {
  return response.map((lesson: any): Lesson => {
    return {
      id: lesson.id,
      title: lesson.title,
      image: lesson.image,
      author: lesson?.author,
      category: lesson.category,
      content: lesson.content,
    };
  });
};
