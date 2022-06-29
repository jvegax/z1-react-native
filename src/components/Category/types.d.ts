import {Category} from './enums';

export interface CategoryProps {
  selectedCategory: Category;
  category: Category;
  handleSelectCategory: (newSelected: Category) => void;
}

export interface CategoryMenuProps {
  selectedCategory: Category;
  handleSelectCategory: (newSelected: Category) => void;
}
