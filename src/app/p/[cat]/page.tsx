import React from "react";
import Layout from "@/components/Layout/Layout";
import { Metadata, ResolvingMetadata } from "next";
import { prisma } from "../../../../lib/prisma";
import ProductListingNew from "@/components/ProductListingNew/productListingNew"

type Props = {
  params: { cat: string; id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

async function getSingleCategory(categoryId: number | string) {
  try {
    const cat = await prisma.category.findFirst({
      where: { id: Number(categoryId) },
    });
    return cat;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const cat = params.cat;

  // fetch data
  const category = await prisma.category.findFirst({
    where: { id: Number(cat) },
  });

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: (category?.name
      ? category?.name + " - "
      : "") + "Product Category Page",
    // description: (category?.name
    //   ? category?.name + " - "
    //   : "") + "Products",
    description: `Discover the perfect ${category?.name} Products at our pharmacy.`,
    openGraph: {
      // images: category?.img
      //   ? [category?.img, ...previousImages]
      //   : [...previousImages],
      images: category?.img ? [category.img] : previousImages,
      url: `https://pharmacyapp.vercel.app/p/${cat}`
    },
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
},) {
  const products = await getProductsByCategory(params.cat);
  const category = await getSingleCategory(params.cat);

  return (
    <>
      <Layout>
        <ProductListingNew products={products} category={category} />
      </Layout>
    </>
  );
}

export default CategoryPage;
