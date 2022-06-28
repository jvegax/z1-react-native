import {Lesson} from '../components/Lesson/types';

export interface useLessonListProps {
  lessons: Lesson[];
  setLessons: React.Dispatch<React.SetStateAction<Lesson[]>>;
}
