import React from "react";
import { SwipeableDrawer, Box, List, Divider } from "@mui/material";
import { LeftBarMenus } from "../../utills/globalData.js";
import LeftMenuLink from "./LeftMenuLink.jsx";
import SiteLogo from "../SiteLogo/SiteLogo.js";

// const DrawerHeader = styled('div')(({ theme }) => ({
//     display: 'flex',
//     alignItems: 'center',
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
//     justifyContent: 'flex-end',
//   }));

const LeftMenuDrawer = ({
  isLeftMenuOpen,
  setIsLeftMenuOpen,
}: {
  isLeftMenuOpen: boolean;
  setIsLeftMenuOpen: any;
}) => {
  return (
    <SwipeableDrawer
      anchor="left"
      open={isLeftMenuOpen}
      onOpen={() => setIsLeftMenuOpen(true)}
      onClose={() => setIsLeftMenuOpen(false)}
      PaperProps={{ sx: { width: 250 } }}
    >
      <Box sx={{ width: "100%" }} role="presentation">
        <SiteLogo name="PharmacyShop" />
        <Divider />
        <List>
          {LeftBarMenus?.map((item, index) => (
            <LeftMenuLink
              key={item?.id}
              icon={item?.icon}
              name={item?.name}
              url={item?.url}
            />
          ))}
        </List>
      </Box>
    </SwipeableDrawer>
  );
};

export default LeftMenuDrawer;
