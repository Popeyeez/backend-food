import { NextRequest, NextResponse } from "next/server";
import { createFood, getFoods } from "@/lib/services/food-service";
import { uploadImageToCloudinary } from "@/lib/utils/uploadImage";
import { Food } from "@/lib/models/Food";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = formData.get("name") as string;
    const price = Number(formData.get("price"));
    const ingredients = formData.get("ingredients") as string;
    const categoryId = formData.get("categoryId") as string;
    const image = formData.get("image") as File;

    if (!name || !price || !ingredients || !categoryId || !image) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Cloudinary upload
    const imageUrl = await uploadImageToCloudinary(image);

    const newFood = await createFood({
      name,
      price,
      ingredients,
      categoryId,
      imageUrl,
    });

    return NextResponse.json({ message: "Food created", data: newFood });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create food" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const foods = await Food.find();
    return NextResponse.json({ data: foods });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch foods" },
      { status: 500 }
    );
  }
}
