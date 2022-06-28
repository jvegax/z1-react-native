import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {Category} from '../Category/enums';

export interface Lesson {
  id: string;
  title: string;
  author?: string;
  image: string;
  category: Category;
  content: string;
}

export interface LessonListProps {
  lessons: Array<Lesson>;
  navigation: NavigationProp<ParamListBase>;
}

export interface LessonProps {
  lesson: Lesson;
}
