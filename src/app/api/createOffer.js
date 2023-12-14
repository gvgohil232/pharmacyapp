import prisma from "../../../prisma/client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, percentage, type, bank } =
      typeof req.body == "string" ? JSON.parse(req.body) : req.body;

    try {
      // we can access db records with prisma functions
      const offer = await prisma.offers.create({
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
}
