import prisma from "../../../prisma/client";


export default async function handler(req, res) {
  if (req.method === "POST") {
    const { offerId } = JSON.parse(req.body);

    try {
      await prisma.offers.delete({
        where: {
          id: offerId,
        },
      });
      res.status(200).json({ message: "deleted" });
    } catch (e) {
      res.status(500).json(e);
    }
  }
}
