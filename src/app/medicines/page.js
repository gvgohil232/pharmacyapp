import React from "react";

import ProductListing from "@/components/ProductListing/ProductListing.js";
import Layout from "@/components/Layout/Layout";
export const metadata = {
  title: "Medicines",
};
const medicines = () => {
  return (
    <>
      <Layout>
        <ProductListing category="medicines" />
      </Layout>
    </>
  );
};

export default medicines;
