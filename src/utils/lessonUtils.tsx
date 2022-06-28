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

export const playerOptions = {
  image:
    'https://image-aws-us-west-2.vsco.co/2f16ec/27269473/5ad213b07314f17811000001/1136x1136/vsco5ad2139a34341.jpg',
  title: '🌄 Test',
  progress: 'Trip in progress | 21h 44min',
  audioImage: 'https://cdn-icons-png.flaticon.com/512/758/758618.png',
};
