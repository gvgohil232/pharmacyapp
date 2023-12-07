import Image from "next/image";
import { prisma } from "../../lib/prisma";
import Layout from "@/components/Layout/Layout";
import HomePage from "@/components/HomePage";
export const revalidate = 60;

export default async function Home() {
  const user = await prisma.user.findFirst({
    where: {
      email: "test@test.com",
    },
  });
  return (
    <Layout>
      <HomePage username={user?.name || ''} />
    </Layout>
  );
}
