// import mongoose, { Schema } from "mongoose";
// import { FoodType } from "../utils/types";

// const FoodSchema = new Schema({
//   name: String,
//   price: { type: Number, required: true },
//   categoryId: { type: Schema.Types.ObjectId, ref: "Category", required: true },
//   ingredients: String,
//   imageUrl: String,
// });

// export const Food =
//   mongoose.models.Food || mongoose.model<FoodType>("Food", FoodSchema);

import mongoose, { Schema, model, models } from "mongoose";

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
