import React from "react";
import Layout from "@/components/Layout/Layout";
import ProductDetailsPage from "@/components/ProductDetailsPage";
import { Metadata, ResolvingMetadata } from "next";
import { prisma } from "../../../../lib/prisma";
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

async function getSingleCategory(categoryId: number | string | any) {
  const products = await prisma.category.findFirst({
    where: { id: Number(categoryId) },
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
    if (product) {
      const category = await getSingleCategory(product?.category);
      product.category = category?.name ?? product?.category;
    } else {
      console.error("Product not found");
    }
    return {
      title:
        (product && product?.name ? product?.name + " - " : "") +
        "Product Details Page",
      description: (product?.category
        ? product?.category + " - "
        : "") + "Product",
      // siteName: `http://localhost:3000/product/${id}`,
      openGraph: {
        // images: product?.img
        //   ? [product?.img, ...previousImages]
        //   : [...previousImages],
        images: product?.img ? [product.img] : previousImages,
        url: `https://pharmacyapp.vercel.app/product/${id}`,
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

const profile = async ({ params }: { params: { id: number } }) => {
  const product = await getProductsById(Number(params?.id));

  if (product) {
    const category = await getSingleCategory(product?.category);
    product.category = category?.name ?? null;
  } else {
    console.error("Product not found");
  }
  return (
    <>
      <Layout>
        <ProductDetailsPage id={params?.id} productDetails={product} />
      </Layout>
    </>
  );
};

export default profile;
