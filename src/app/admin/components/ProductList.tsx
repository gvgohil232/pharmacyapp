"use client";
import React from "react";
import DeleteProduct from "../components/DeleteProduct";
import { ProductType } from "../products/page";
import DataTable, { TableColumn } from "react-data-table-component";
import Link from "next/link";
type DataRow = {
  id: string;
  name: string;
  price: string;
  category: string;
};
const columns: TableColumn<DataRow>[] = [
  {
    name: "Product Name",
    selector: (row: ProductType) => row.name,
    // sortable: true,
  },
  {
    name: "Price",
    selector: (row: ProductType) => row.price,
    // sortable: true,
  },
  {
    name: "Category",
    selector: (row: ProductType) => row.category,
    // sortable: true,
  },
  {
    name: "Action",
    selector: (row: ProductType) => (
      <>
        <Link
          className="btn btn-sm btn-warning mx-1"
          href={`/admin/products/edit/${row.id}`}
        >
          Edit
        </Link>
        <DeleteProduct product_id={row.id} />
      </>
    ),
    // sortable: true,
  },
];

export default function ProductList({ products }: { products: ProductType[] }) {
  const dataRows: DataRow[] = products.map((product) => {
    return {
      id: product.id,
      name: product.name,
      price: product?.price ? product?.price.toString() : "",
      category: product.category,
    };
  });
  return (
    <>
      <DataTable
        title="Products List"
        columns={columns}
        data={dataRows}
        pagination
      />
    </>
  );
}
