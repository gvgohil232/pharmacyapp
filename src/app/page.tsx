import Image from "next/image";
import { prisma } from "../../lib/prisma";
import Layout from "@/components/Layout/Layout";
import HomePage from "@/components/HomePage";
export const revalidate = 60;

async function getProfile() {
  try {
    const res = await prisma.user.findFirst({
      where: {
        email: "test@test.com",
      },
    });
    return res;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
}

async function getCategories() {
  try {
    const cat = await prisma.category.findMany();
    return cat;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

async function getProducts() {
  try {
    const products = await prisma.product.findMany();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function Home() {
  const categories = await getCategories();
  const products = await getProducts();
  const user = await getProfile();
  return (
    <Layout>
      <HomePage categories={categories || []} username={user?.name || ""} products={products} />
    </Layout>
  );
}
