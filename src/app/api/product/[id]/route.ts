import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";
import { writeFile } from "fs/promises";
import { join } from "path";

export interface ProductTypeUpdate {
  id?: number;
  name?: string | any;
  content?: string | any;
  price?: string | number | any;
  originalPrice?: string | number | any;
  category?: string | any;
  categories?:string | any;
  img?: string | any;
}
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: String } }
) {
  try{
  const res = await request.formData();
  const file: File | null = res.get("img") as unknown as File;

  const updateData: ProductTypeUpdate = {};
  if(res.get("name") !== ''){
    updateData.name = res.get("name");
  }
  if(res.get("price")){
    updateData.price = res.get("price");
  }
  if(res.get("content")){
    updateData.content = res.get("content");
  }
  if(res.get("originalPrice")){
    updateData.originalPrice = res.get("originalPrice");
  }
  if(res.get("category")){
    const category = res.get("category");
    
    updateData.category = String(category);
    updateData.categories= {
        create: [
          {
            category: {
              connect: { id: Number(category) }, // Replace with the actual ID of the category
            },
            assignedBy: 'AuthId', // You might need to provide the assignedBy value
          },
        ],
      };
  }
  if (file) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const path = join(process.cwd(), "/public/assets/uploads", file.name);
    await writeFile(path, buffer);
    updateData.img = "/assets/uploads/" + file.name;
    // console.log(`open ${path} to see uploaded files`);
  }
  

  const result = await prisma.product.update({
    where: {
      id: Number(params.id),
    },
    data: {...updateData},
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
