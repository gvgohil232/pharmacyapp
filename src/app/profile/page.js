import React from "react";
import { Container } from "@mui/system";
import { prisma } from "../../../lib/prisma";

import Layout from "@/components/Layout/Layout";
import { List, ListItem } from "@mui/material";
export const metadata = {
  title: "Profile",
};
const profile = async () => {
  const user = await prisma.user.findFirst({
    where: {
      email: "test@test.com",
    },
  });
  return (
    <>
      <Layout>
        <Container sx={{'my': 2, 'p': 3}}>
          Hi, {user.name}
          <List variant="outlined"
              sx={{
                minWidth: 240,
                borderRadius: 'sm',
              }}>
            <ListItem>Id: {user.id}</ListItem>
            <ListItem>Email: {user.email}</ListItem>
            <ListItem>Name: {user.name}</ListItem>
          </List>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
            deserunt quibusdam quidem odit, voluptatibus enim suscipit fugit
            debitis labore repellendus molestias. Quis eveniet repellendus
            quisquam architecto consequuntur quos necessitatibus nostrum!
          </p>
        </Container>
      </Layout>
    </>
  );
};

export default profile;
