export interface CategoryProps {
  category: string;
  filterLesson: (name: String) => void;
}

export interface CategoryMenuProps {
  filterLesson: (name: String) => void;
}
