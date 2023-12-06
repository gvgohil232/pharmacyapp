import React from "react";

import ProductListing from "@/components/ProductListing/ProductListing.js";
import Layout from "@/components/Layout/Layout";
export const metadata = {
  title: "healthcare",
};
const Healthcare = () => {
  return (
    <>
      <Layout>
        <ProductListing category="healthcare" />
      </Layout>
    </>
  );
};

export default Healthcare;
