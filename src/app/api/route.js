import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import prisma from "../../../prisma/client";

export async function GET(request) {
  const { offerId } = req.query;

  try {
    const offers = await prisma.offer.findMany({
      where: {
        //   id: parseInt(user),
        id: offerId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    res.status(200).json({ offers });
  } catch (e) {
    res.status(500).json(e);
  }
}

export async function POST(req, res) {
  const { name, percentage, type, bank } =
    typeof req.body == "string" ? JSON.parse(req.body) : req.body;
  console.log("req.body", name);

  try {
    const offer = await prisma.offer.create({
      data: {
        name,
        percentage,
        type,
        bank,
      },
    });
    res.status(200).json({ offer });
  } catch (e) {
    res.status(500).json(e);
  }
}

export async function PATCH(request) {
  const { offerId, name, percentage, type, bank } = JSON.parse(req.body);

  try {
    const updatedOffer = await prisma.offer.update({
      where: {
        id: offerId,
      },
      data: {
        name,
        percentage,
        type,
        bank,
      },
    });
    res.status(200).json({ updatedOffer });
  } catch (e) {
    res.status(500).json(e);
  }
}

export async function DELETE(request) {
  const { offerId } = JSON.parse(req.body);

  try {
    await prisma.offer.delete({
      where: {
        id: offerId,
      },
    });
    res.status(200).json({ message: "deleted" });
  } catch (e) {
    res.status(500).json(e);
  }
}
