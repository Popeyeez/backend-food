import { Food } from "../models/Food";

export const createFood = async (data: {
  name: string;
  price: number;
  ingredients: string;
  category: string;
  imageUrl: string; // <-- URL
}) => {
  const newFood = new Food({
    name: data.name,
    price: data.price,
    ingredients: data.ingredients,
    category: data.category,
    imageUrl: data.imageUrl,
  });

  await newFood.save();
  return newFood;
};
