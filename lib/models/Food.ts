import mongoose, { Schema, model, models } from "mongoose";

const FoodSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  ingredients: { type: String, required: true },
  category: Schema.Types.ObjectId,
  imageUrl: { type: String, required: true },
});

export const Food = models.Food || model("Food", FoodSchema);
