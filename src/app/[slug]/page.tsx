import Layout from "@/components/Layout/Layout";
import { Card, CardContent, Container, Typography } from "@mui/material";
import React from "react";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  return {
    title: slug,
  };
}

const profile = ({ params }: { params: { slug: string } }) => {
  return (
    <Layout>
      <Container sx={{ my: 5 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h3">{params?.slug} Page</Typography>
            <p>This is Dynamic router page</p>
          </CardContent>
        </Card>
      </Container>
    </Layout>
  );
};

export default profile;
