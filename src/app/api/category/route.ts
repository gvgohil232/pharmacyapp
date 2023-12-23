import { writeFile } from "fs/promises";
import { prisma } from "../../../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";

export async function POST(request: NextRequest) {
  try {
    const res = await request.formData();
    const file: File | null = res.get("img") as unknown as File;
    let imgfile = "";

    if (file) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const path = join(process.cwd(), "/public/assets/uploads", file.name);
      await writeFile(path, buffer);
      imgfile = "/assets/uploads/" + file.name;
    }

    const name = res.get("name");

    const result = await prisma.category.create({
      data: {
        name: name ? String(name) : "",
        img: imgfile,
      },
    });

    return NextResponse.json({ result });
  } catch (error) {
    console.error("Error in POST:", error);
    return NextResponse.json(
      { error: "Internal Server Error", e: error },
      { status: 500 }
    );
  }
}
