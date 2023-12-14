import prisma from "../../../prisma/client";

export default async function handler(req, res) {
  if (req.method === "GET") {
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
}
