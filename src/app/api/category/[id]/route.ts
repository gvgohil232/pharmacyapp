import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";
import { writeFile } from "fs/promises";
import { join } from "path";

export interface ProductTypeUpdate {
  id?: number;
  name?: string;
  img?: string | any;
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: String } }
) {
  try {
    const res = await request.formData();
    const file: File | null = res.get("img") as unknown as File;
    const updateData: ProductTypeUpdate = {};
  if(res.get("name") !== ''){
    updateData.name = res.get("name");
  }
  let imgfile = "";
  if (file) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const path = join(process.cwd(), "/public/assets/uploads", file.name);
    await writeFile(path, buffer);
    updateData.img = "/assets/uploads/" + file.name;
    // console.log(`open ${path} to see uploaded files`);
  }
  
    const result = await prisma.category.update({
      where: {
        id: Number(params.id),
      },
      data: {...updateData},
    });

    return NextResponse.json({ result });
  } catch (error) {
    console.error("Error in PUT:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: String } }
) {
  try {
    const categoryId = Number(params.id);

    const deletedCategory = await prisma.category.delete({
      where: { id: categoryId },
    });

    return NextResponse.json(deletedCategory);
  } catch (error) {
    console.error("Error in DELETE:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
