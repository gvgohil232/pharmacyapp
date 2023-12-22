import Link from "next/link";
import { prisma } from "../../../../../lib/prisma";
import AddProductForm from "../../components/AddProductForm";


async function getCategories() {
  try {
    const cat = await prisma.category.findMany();
    return cat;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}
export default async function AddProduct() {
  const categories = await getCategories();
  return (
    <div>
      <div className="flex items-center  h-10 intro-y">
        <Link href="/admin/products" className="mr-3">
          {`< Back`}
        </Link>
        <h2 className="mr-5 text-lg font-medium truncate">Add New Product</h2>
      </div>
      <AddProductForm categories={categories} />
    </div>
  );
}
