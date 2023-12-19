import EditProduct from "@/app/admin/components/EditProduct";
import { prisma } from "../../../../../../lib/prisma";
import { ProductType } from "../../page";

async function getProduct(id: string): Promise<ProductType | null> {
  const product = await prisma.product.findFirst({ where: { id: Number(id) } });
  return product;
}

export default async function EditProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await getProduct(id);
  if (id && id !== "" && product !== null && typeof product == "object") {
    return <EditProduct product={product} />;
  } else {
    return <>No product found!!!</>;
  }
}
