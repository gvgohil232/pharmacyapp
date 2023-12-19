import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";
import { writeFile } from "fs/promises";
import { join } from "path";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: String } }
) {
  try{
  const res = await request.formData();
  const file: File | null = res.get("img") as unknown as File;
  let imgfile = "";
  if (file) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const path = join(process.cwd(), "/public/assets/uploads", file.name);
    await writeFile(path, buffer);
    imgfile = "/assets/uploads/" + file.name;
    // console.log(`open ${path} to see uploaded files`);
  }
  const name = res.get("name");
  const price = res.get("price");
  const content = res.get("content");
  const originalPrice = res.get("originalPrice");
  const category = res.get("category");

  const result = await prisma.product.update({
    where: {
      id: Number(params.id),
    },
    data: {
      name: String(name),
      content: String(content),
      img: String(imgfile),
      price: String(price),
      originalPrice: String(originalPrice),
      category: String(category),
      // published: true,
      // author: {create: {
      //     name: 'girirajsinh'
      // }}
    },
  });

  return NextResponse.json({ result });
} catch (error) {
  console.error("Error in POST:", error);
  return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
}
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: String } }
) {
  try {
  const id = params.id;

  const post = await prisma.product.delete({
    where: { id: Number(id) },
  });

  return NextResponse.json(post);
} catch (error) {
  console.error("Error in POST:", error);
  return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
}
}
