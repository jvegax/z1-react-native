export interface Lesson {
  id: string;
  title: string;
  author?: string;
  image: string;
  category: {title: string};
  content: string;
}

export interface LessonListProps {
  lessons: Array<Lesson>;
  navigation: any;
}

export interface LessonProps {
  lesson: Lesson;
}
