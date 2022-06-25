export const filterByCategoryName = (name, items) => {
  if (name === 'All') {
    return items;
  }
  return items.filter(i => i.category.title === name);
};

export const getAllCategories = () => {
  const categories = [
    'All',
    'Favourites ❤️',
    'Harm Reduction',
    'Integration',
    'Mindfulness',
    'Tripping',
  ];
  return categories;
};
