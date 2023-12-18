"use client";
/* Components */
import Container from "@mui/material/Container";
import HomeCarousel from "@/components/HomeCarousel/HomeCarousel";
import CategoryCarousel from "@/components/CategoryCarousel/CategoryCarousel";
import ColumnBanner from "@/components/ColumnBanner/ColumnBanner";
import ProductCarousel from "@/components/ProductCarousel/ProductCarousel";
import ContactSection from "@/components/ContactSection/ContactSection";
import { Card, CardContent, Typography } from "@mui/material";

export default function HomePage({ categories, username }: { categories: string[], username: string | '' }) {
  return (
    <Container>
      {/* <PageTitle title="Pharmnacy Shop" /> */}
      <Card variant="outlined" sx={{'my':3}}>
        <CardContent>
          <Typography variant="h5" component="div">
            Wellcome Back, {username || "User"}
          </Typography>
        </CardContent>
      </Card>
      <HomeCarousel />
      <CategoryCarousel categories={categories} />
      <ColumnBanner />
      <ProductCarousel />
      <ContactSection />
    </Container>
  );
}
