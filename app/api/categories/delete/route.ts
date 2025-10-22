import { NextRequest, NextResponse } from "next/server";
import { Category } from "@/lib/models/Category";
import connectDB from "@/lib/mongodb";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ message: "ID required" }, { status: 400 });
    }

    await Category.findByIdAndDelete(id);
    return NextResponse.json({ message: "Category deleted" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to delete category." },
      { status: 500 }
    );
  }
}
