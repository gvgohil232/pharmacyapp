import React from "react";
import Layout from "@/components/Layout/Layout";
import ProductDetailsPage from "@/components/ProductDetailsPage";
export const metadata = {
  title: "Product Details page",
};

const profile = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <Layout>
        <ProductDetailsPage id={params?.id?.[0]} />
      </Layout>
    </>
  );
};

export default profile;
