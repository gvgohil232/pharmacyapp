import prisma from "../../../../prisma/client";

export async function GET(req, res) {
  console.log("reaching to get");

  try {
    const offers = await prisma.offers.findMany();
    console.log("offers", offers);
    return Response.json({ offers });
  } catch (e) {
    return Response.json(e);
  }
}

export async function POST(req, res) {
  console.log("reaching to post");
  const { offer } = await req.json();
  console.log("offer", offer);
  try {
    const newOffer = await prisma.offers.create({
      data: {
        name: offer.name,
        percentage: offer.percentage,
        type: offer.type,
        bank: offer.bank,
      },
    });
    res.status(200).json({ newOffer });
    // return NextResponse.json({ name, percentage, type, bank });
  } catch (error) {
    // console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
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
