import React from "react";
import Layout from "@/components/Layout/Layout";
import ProductDetailsPage from "@/components/ProductDetailsPage";
import { Metadata, ResolvingMetadata } from "next";
import { prisma } from "../../../../lib/prisma";

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
  // const products = prisma.product.findMany({ where: { category: cat } });

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: cat || "Product Category Page",
  };
}

async function getProductsByCategory(category: string) {
  const products = await prisma.product.findMany({
    where: { category: category },
  });
  return products;
}

async function CategoryPage({ params }: { params: { cat: string } }) {
  const products = getProductsByCategory(params.cat);
  console.log("products", products);
  return (
    <>
      <Layout>
        sdf
        {/* <ProductDetailsPage id={params?.id?.[0]} /> */}
      </Layout>
    </>
  );
}

export default CategoryPage;
