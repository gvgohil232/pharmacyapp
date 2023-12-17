import { writeFile } from "fs/promises";
import { prisma } from "../../../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";

export async function POST(request: NextRequest) {
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

  const result = await prisma.product.create({
    data: {
      name: name,
      content: content,
      img: imgfile,
      price: price,
      category: category,
      originalPrice: originalPrice,
      // published: true,
      // author: {create: {
      //     name: 'girirajsinh'
      // }}
    },
  });

  return NextResponse.json({ result });
}
