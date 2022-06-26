export interface CategoryProps {
  category: string;
  filterLesson: (name: string) => void;
}

export interface CategoryMenuProps {
  filterLesson: (name: string) => void;
}
