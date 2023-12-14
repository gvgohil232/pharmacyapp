import prisma from "../../../prisma/client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { offerId, name, percentage, type, bank } = JSON.parse(req.body);

    try {
      const updatedOffer = await prisma.offers.update({
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
}
