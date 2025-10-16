export type CategoryType = {
  name: string;
  _id: string;
};

export type Foodtype = {
  name: string;
  _id: string;
  price: number;
  ingredients: string;
  image: string;
  categoryId: CategoryType;
};
