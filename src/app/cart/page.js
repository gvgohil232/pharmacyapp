import React from "react";

import CartPage from "@/components/CartPage";
import Layout from "@/components/Layout/Layout";
export const metadata = {
  title: "Cart",
};
const cart = () => {
  return (
    <>
      <Layout>
        <CartPage />
      </Layout>
    </>
  );
};

export default cart;
