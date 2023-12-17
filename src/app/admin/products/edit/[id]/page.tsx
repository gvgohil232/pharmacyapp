import EditProduct from "@/app/admin/components/EditProduct";
import { prisma } from "../../../../../../lib/prisma";

async function getProduct(id: string) {
  const product = await prisma.product.findFirst({ where: { id: id } });
  return product;
}

export default async function EditProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await getProduct(id);

  return <EditProduct product={product} />;
}
