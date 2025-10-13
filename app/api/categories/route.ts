import { NextRequest, NextResponse } from "next/server";
import {
  createCategory,
  getAllCategories,
} from "@/lib/services/category-services";

export async function GET() {
  const categories = await getAllCategories();
  return NextResponse.json({ data: categories }, { status: 200 });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  if (!body.name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  await createCategory(body.name);
  return NextResponse.json({ message: "Category created" }, { status: 201 });
}
