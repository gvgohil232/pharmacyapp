"use client";
import React from "react";
import DeleteCategory from "../components/DeleteCategory";
import { CategoryType } from "../categories/page";
import DataTable, { TableColumn } from "react-data-table-component";
import Link from "next/link";
type DataRow = {
    id: string;
    name: string;
};
const columns: TableColumn<DataRow>[] = [
    {
        name: "Category Name",
        selector: (row: CategoryType) => row.name,
        // sortable: true,
    },
    {
        name: "Action",
        selector: (row: CategoryType) => (
            <>
                <Link
                    className="btn btn-sm btn-warning mx-1"
                    href={`/admin/categories/edit/${row.id}`}
                >
                    Edit
                </Link>
                <DeleteCategory category_id={row.id} />
            </>
        ),
        // sortable: true,
    },
];

export default function CategoryList({ categories }: { categories: CategoryType[] }) {
    const dataRows: DataRow[] = categories.map((product) => {
        return {
            id: product.id,
            name: product.name,
        };
    });
    return (
        <>
            <DataTable
                title="categories List"
                columns={columns}
                data={dataRows}
                pagination
            />
        </>
    )
}