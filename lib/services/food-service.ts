import { Food } from "@/lib/models/Food";

export async function createFood(data: {
  name: string;
  price: number;
  ingredients: string;
  category: string;
  imageUrl: string;
}) {
  const newFood = new Food(data);
  await newFood.save();
  return newFood;
}

export async function getFoods() {
  const foods = await Food.find();
  return foods;
}
