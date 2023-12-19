import EditProduct from "@/app/admin/components/EditProduct";
import { prisma } from "../../../../../../lib/prisma";
import { ProductType } from "../../page";

async function getProduct(id: string): Promise<ProductType | null> {
  try {
    const productId = Number(id);
    const product = await prisma.product.findFirst({ where: { id: productId } });
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export default async function EditProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  try {
    const product = await getProduct(id);
    if (id && id !== "" && product !== null && typeof product == "object") {
      return <EditProduct product={product} />;
    } else {
      return <>No product found!!!</>;
    }
  } catch (error) {
    console.error("Error in EditProductPage:", error);
    return <>An unexpected error occurred!</>;
  }
}
