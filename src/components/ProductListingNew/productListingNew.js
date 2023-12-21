"use client";
import React, { useState, useEffect } from "react";
import {
  Paper,
  Container,
  Grid,
} from "@mui/material";
import ProductCarouselItem from "../ProductCarousel/ProductCarouselItem";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

const ProductListingNew = ({ products }) => {

  return (
    <Container sx={{ marginY: "14px" }}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Paper elevation={0}>{products?.length} Products</Paper>
          <Item
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {products?.map((item, index) => (
              <ProductCarouselItem item={item} key={index} />
            ))}
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductListingNew;
