"use client";
/* Components */
import Container from "@mui/material/Container";
import HomeCarousel from "@/components/HomeCarousel/HomeCarousel";
import CategoryCarousel from "@/components/CategoryCarousel/CategoryCarousel";
import ColumnBanner from "@/components/ColumnBanner/ColumnBanner";
import ProductCarousel from "@/components/ProductCarousel/ProductCarousel";
import ContactSection from "@/components/ContactSection/ContactSection";
import { Card, CardContent, Typography } from "@mui/material";
import NewOffer from "../../components/Offers/newOffer";

export default function OfferPage() {
// { username }: { username: string | '' }
  return (
    <Container>
      {/* <PageTitle title="Pharmnacy Shop" /> */}
      <Card variant="outlined" sx={{ my: 3 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Offers Operations
          </Typography>
        </CardContent>
      </Card>
      {/* <HomeCarousel />
      <CategoryCarousel />
      <ColumnBanner />
      <ProductCarousel />
      <ContactSection /> */}
      <NewOffer />
    </Container>
  );
}
