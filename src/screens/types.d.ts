import {Lesson} from '../components/Lesson/types';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {Category} from '../components/Category/enums';

export interface LessonState {
  lessons: Array<Lesson>;
  filteredLessons: Array<Lesson>;
  favourites: Array<Lesson>;
  selectedCategory: Category;
}

export interface DetailsScreenProps {
  route: any;
}

interface HomeProps {
  navigation: NavigationProp<ParamListBase>;
}
