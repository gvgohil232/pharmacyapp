import Image from "next/image";
import { prisma } from "../../lib/prisma";
import Layout from "@/components/Layout/Layout";
import HomePage from "@/components/HomePage";
export const revalidate = 60;

async function getProfile() {
  const res = await prisma.user.findFirst({
    where: {
      email: "test@test.com",
    },
  });
  return res;
}

async function getCategories() {
  const categories = await prisma.categories.findMany();
  return categories;
}

async function getProducts() {
  const categories = await prisma.products.findMany();
  return categories;
}

// async function getCategories() {
//   const res = await prisma.product.findMany();
//   let cat: string[] = [];
//   if (res.length) {
//     res.forEach((product) => cat.push(String(product.category)));
//   }
//   cat = cat.filter(
//     (val, index, arr) => arr.indexOf(val) === index && val !== "" && val != null
//   );
//   return cat;
// }

export default async function Home() {
  const categories = await getCategories();
  const products = await getProducts();
  console.log("categories at page.tsx", categories);
  const user = await getProfile();
  return (
    <Layout>
      <HomePage categories={categories || []} username={user?.name || ""} products={products || []} />
    </Layout>
  );
}
