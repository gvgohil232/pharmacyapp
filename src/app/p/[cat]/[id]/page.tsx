import React from "react";
import Layout from "@/components/Layout/Layout";
import ProductDetailsPage from "@/components/ProductDetailsPage";
import type { Metadata, ResolvingMetadata } from "next";
import { prisma } from "../../../../../lib/prisma";
import { ProductType } from "@/app/admin/products/page";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

async function getProductsById(productId: number) {
  const products = await prisma.product.findFirst({
    where: { id: Number(productId) },
  });
  return products;
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  // fetch data
  if (id) {
    const product = await getProductsById(Number(id));
    return {
      title:
        (product && product?.name ? product?.name + " - " : "") +
        "Product Details Page",
      openGraph: {
        images: product?.img
          ? [process.env.APP_URL + product?.img, ...previousImages]
          : [...previousImages],
      },
    };
  }
  return {
    title: "Product Details Page",
    openGraph: {
      images: [...previousImages],
    },
  };
}

const ProductDetails = async ({ params }: { params: { id: number } }) => {
  const product = await getProductsById(Number(params?.id));
  return (
    <>
      <Layout>
        <ProductDetailsPage id={params?.id} productDetails={product} />
      </Layout>
    </>
  );
};

export default ProductDetails;
