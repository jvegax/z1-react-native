import {Lesson} from '../components/Lesson/types';

export interface HomeState {
  lessons: Array<Lesson>;
  favourites: Array<Lesson>;
}

export interface DetailsScreenProps {
  route: any;
}
