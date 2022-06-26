export interface Lesson {
  id: string;
  title: string;
  author?: string;
  image: string;
  category: {id: string; title: string};
  content: string;
}

export interface LessonListProps {
  lessons: Array<Lesson>;
}

export interface LessonCardProps {
  lesson: Lesson;
}
