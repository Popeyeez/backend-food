// import { Food } from "../models/Food";
// import connectDB from "../mongodb";
// import { FoodType } from "../utils/types";
// import { Category } from "../models/Category";

// export const getFoods = async (): Promise<FoodType[]> => {
//   await connectDB();
//   const allFoods: FoodType[] = await Food.find({}).populate("categoryId");
//   return allFoods;
// };

import { Food } from "../models/Food";
import { Category } from "../models/Category";
import connectDB from "../mongodb";

export const getFoods = async () => {
  await connectDB();

  const foods = await Food.find({}).populate("categoryId");
  return foods;
};
export const createFood = async (data: {
  name: string;
  price: number;
  ingredients: string;
  categoryId: string;
  imageUrl: string;
}) => {
  await connectDB();
  const newFood = new Food(data);
  await newFood.save();
  return newFood;
};
