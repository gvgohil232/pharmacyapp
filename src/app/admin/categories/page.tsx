import React from "react";
import { prisma } from "../../../../lib/prisma";
import CategoryList from "../components/CategoryList";
import Link from "next/link";
export const revalidate = 60;
async function getCategories() {
  const cat = await prisma.category.findMany();
  return cat;
}

export interface CategoryType {
  id: number;
  name: string;
  img?: string | any;
  // posts?: string | any;
}
export default async function CategoryPage() {
  const cat = await getCategories();

  return (
    <>
      <div className="flex items-center justify-between h-10 intro-y">
        <h2 className="mr-5 text-lg font-medium truncate">Categories</h2>
        <Link href="/admin/categories/add" className="btn btn-sm btn-success mr-10">Add New Category</Link>
      </div>
      <div className="flex items-start w-full mt-3">
        <div className="relative flex-1 overflow-x-auto shadow-md sm:rounded-lg mr-10">
          <CategoryList categories={cat} />
        </div>
      </div>
    </>
  );
}
