"use client";
import React from "react";
import DeleteCategory from "./DeleteCategory";
import { CategoryType } from "../categories/page";
import DataTable, { TableColumn } from "react-data-table-component";
import Link from "next/link";
type DataRow = {
  id: number;
  name: string;
  img: string;
  // posts: object;
};
const columns: TableColumn<DataRow>[] = [
  {
    name: "Category Name",
    selector: (row: CategoryType) => row.name,
    // sortable: true,
  },
  // {
  //   name: "post",
  //   selector: (row: CategoryType) => row.posts,
  //   // sortable: true,
  // },
  {
    name: "Action",
    cell: (row: CategoryType) => (
      <>
        <Link
          className="btn btn-sm btn-warning mx-1"
          href={`/admin/categories/edit/${row.id}`}
        >
          Edit
        </Link>
        <DeleteCategory category_id={String(row.id)} />
      </>
    ),
    // sortable: true,
  },
];

export default function CategoryList({ categories }: { categories: CategoryType[] }) {
  const dataRows: DataRow[] = categories.map((category) => {
    return {
      id: category.id,
      name: category.name,
      img: category?.img || '',
      // posts: category.posts,
    };
  });
  return (
    <>
      <DataTable
        title="Category List"
        columns={columns}
        data={dataRows}
        pagination
      />
    </>
  );
}
