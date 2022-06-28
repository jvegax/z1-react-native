import {Lesson} from '../components/Lesson/types';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

export interface LessonState {
  lessons: Array<Lesson>;
  filteredLessons: Array<Lesson>;
  favourites: Array<Lesson>;
  selectedCategory: Category | null;
}

export interface DetailsScreenProps {
  route: any;
}

interface HomeProps {
  navigation: NavigationProp<ParamListBase>;
}
