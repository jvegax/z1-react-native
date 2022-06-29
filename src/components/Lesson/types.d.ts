import {NavigationProp, ParamListBase} from '@react-navigation/native';

export interface Lesson {
  id: string;
  title: string;
  author?: string;
  image: string;
  category: string;
  content: string;
}

export interface LessonListProps {
  lessons: Array<Lesson>;
  navigation: NavigationProp<ParamListBase>;
}

export interface LessonProps {
  lesson: Lesson;
}
