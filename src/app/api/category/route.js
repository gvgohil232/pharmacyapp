import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET(req, res) {
  console.log("reaching to get");

  try {
    const categories = await prisma.categories.findMany();
    return Response.json({ categories });
  } catch (e) {
    return Response.json(e);
  }
}

export async function POST(req, res) {
  console.log("reaching to post");
  const data = await req.formData();
  const name = data.get("name");
  console.log("category", name);
  try {
    const newCategory = await prisma.categories.create({
      data: {
        name: name,
      },
    });
    return NextResponse.json({ newCategory }, { status: 200 });
    // return NextResponse.json({ name, percentage, type, bank });
  } catch (error) {
    // console.error("Error:", error);
    return NextResponse.json({ message: "error", error }, { status: 500 });
    // return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

// export async function PATCH(request) {
//   console.log("reaching to patch")
//   const { offerId, name, percentage, type, bank } = JSON.parse(req.body);

//   try {
//     const updatedOffer = await prisma.offer.update({
//       where: {
//         id: offerId,
//       },
//       data: {
//         name,
//         percentage,
//         type,
//         bank,
//       },
//     });
//     res.status(200).json({ updatedOffer });
//   } catch (e) {
//     res.status(500).json(e);
//   }
// }

// export async function DELETE(request) {
//   console.log("reaching to delete")
//   const { offerId } = JSON.parse(req.body);

//   try {
//     await prisma.offer.delete({
//       where: {
//         id: offerId,
//       },
//     });
//     res.status(200).json({ message: "deleted" });
//   } catch (e) {
//     res.status(500).json(e);
//   }
// }
