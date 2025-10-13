import { NextRequest, NextResponse } from "next/server";
import { createFood } from "@/lib/services/food-service";
import { uploadImageToCloudinary } from "@/lib/utils/uploadImage";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = formData.get("name") as string;
    const price = Number(formData.get("price"));
    const ingredients = formData.get("ingredients") as string;
    const category = formData.get("category") as string;
    const image = formData.get("image") as File;

    if (!name || !price || !ingredients || !category || !image) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }
    console.log("FormData:", {
      name: formData.get("name"),
      price: formData.get("price"),
      ingredients: formData.get("ingredients"),
      category: formData.get("category"),
      image: formData.get("image"),
    });
    // Cloudinary руу upload
    const imageUrl = await uploadImageToCloudinary(image);

    const newFood = await createFood({
      name,
      price,
      ingredients,
      category,
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
