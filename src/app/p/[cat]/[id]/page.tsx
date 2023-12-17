import React from "react";
import Layout from "@/components/Layout/Layout";
import ProductDetailsPage from "@/components/ProductDetailsPage";
import type { Metadata, ResolvingMetadata } from "next";
import { prisma } from "../../../../../lib/prisma";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const product = prisma.product.findFirst({ where: { id: id } });

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product?.name || "Product Details Page",
    openGraph: {
      images: [product?.img, ...previousImages],
    },
  };
}

const ProductDetails = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <Layout>
        <ProductDetailsPage id={params?.id?.[0]} />
      </Layout>
    </>
  );
};

export default ProductDetails;
