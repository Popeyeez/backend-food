import mongoose, { Schema, model, models } from "mongoose";
import { Category } from "../models/Category";

const FoodSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    ingredients: { type: String, required: true },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    imageUrl: { type: String, required: true },
  },
  { timestamps: true }
);

export const Food = models.Food || model("Food", FoodSchema);
