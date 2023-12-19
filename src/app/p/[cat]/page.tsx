import React from "react";
import Layout from "@/components/Layout/Layout";
import ProductDetailsPage from "@/components/ProductDetailsPage";
import { Metadata, ResolvingMetadata } from "next";
import { prisma } from "../../../../lib/prisma";
import Link from "next/link";

type Props = {
  params: { cat: string; id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  // const id = params.id;
  const cat = params.cat;

  // fetch data
  const category = await prisma.category.findFirst({
    where: { id: Number(cat) },
  });

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: category?.name
      ? category?.name + " - "
      : "" + "Product Category Page",
  };
}

async function getProductsByCategory(category: number | string) {
  const products = await prisma.product.findMany({
    where: {
      categories: {
        some: {
          category: {
            id: Number(category),
          },
        },
      },
    },
  });
  return products;
}

async function CategoryPage({
  params,
}: {
  params: { cat: number | string; id: number };
}) {
  const products = await getProductsByCategory(params.cat);
  return (
    <>
      <Layout>
        <h3>Products by Category: {params.cat}</h3>
        {products?.map((p) => {
          return (
            <Link
              href={`/p/${params.cat}/${p.id}`}
              key={p.id}
              className="card p-4 border m-2"
            >
              {p.name}
            </Link>
          );
        })}
        {/* <ProductListing category="medicines" /> */}
      </Layout>
    </>
  );
}

export default CategoryPage;
