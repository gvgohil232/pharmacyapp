import React from "react";
import { prisma } from "../../../../lib/prisma";
import ProductList from "../components/ProductList";
import Link from "next/link";

async function getProducts() {
  const products = await prisma.product.findMany();
  return products;
}

export interface ProductType {
  id: string;
  name: string;
  content?: string;
  price?: string;
  category?: string | any;
}
export default async function ProductPage() {
  const products = await getProducts();

  return (
    <>
      <div className="flex items-center justify-between h-10 intro-y">
        <h2 className="mr-5 text-lg font-medium truncate">Product</h2>
        <Link href="/admin/products/add" className="btn btn-sm btn-success mr-10">Add New Product</Link>
      </div>
      <div className="flex items-start w-full mt-3">
        <div className="relative flex-1 overflow-x-auto shadow-md sm:rounded-lg mr-10">
          <ProductList products={products} />
        </div>
      </div>
    </>
  );
}
