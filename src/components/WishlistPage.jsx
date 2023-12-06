"use client";
import NotFound from "@/components/NotFound/NotFound";
import PsBox from "@/components/PsBox/PsBox";
import PsPageHeading from "@/components/PsPageHeading/PsPageHeading";
import UserProductItem from "@/components/UserProductItem/UserProductItem";
import { Products } from "@/utills/globalData";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import React, { useEffect, useState } from "react";

const WishlistPage = () => {
  const [wishlistData, setWishlistData] = useState([]);

  const wishlist = React.useMemo(() => [], []);

  useEffect(() => {
    let data = Products?.filter((item) => wishlist?.includes(item?.id));
    setWishlistData(data);
  }, [wishlist]);

  return (
    <>
      <Container sx={{ marginBottom: "15px" }}>
        <PsPageHeading>
          <h4>Wishlist</h4>
          <span>{wishlist?.length} Products</span>
        </PsPageHeading>
        {wishlistData?.length > 0 ? (
          <PsBox>
            <Stack spacing={3}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                {wishlistData?.map((item, key) => (
                  <>
                    <Grid item xs={4} key={key}>
                      <UserProductItem item={item} productIn="wishlist" />
                    </Grid>
                  </>
                ))}
              </Grid>
            </Stack>
          </PsBox>
        ) : (
          <NotFound what="wishlist" />
        )}
      </Container>
    </>
  );
};

export default WishlistPage;
