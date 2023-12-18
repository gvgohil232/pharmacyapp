import React from "react";
import { prisma } from "../../../../lib/prisma";
import Link from "next/link";
import CategoryList from "../components/CategoryList";

async function getCategories() {
  const categories = await prisma.categories.findMany();
  return categories;
}

export interface CategoryType {
  id: string;
  name: string;
}
export default async function CategoryPage() {
  const categories = await getCategories();

  return (
    <>
      <div className="flex items-center justify-between h-10 intro-y">
        <h2 className="mr-5 text-lg font-medium truncate">Category</h2>
        <Link href="/admin/categories/add" className="btn btn-sm btn-success mr-10">Add New CateGory</Link>
      </div>
      <div className="flex items-start w-full mt-3">
        <div className="relative flex-1 overflow-x-auto shadow-md sm:rounded-lg mr-10">
          <CategoryList categories={categories} />
        </div>
      </div>
    </>
  );
}
