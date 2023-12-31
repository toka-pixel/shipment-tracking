import React from "react";
import { Box, useTheme, useMediaQuery, Divider } from "@mui/material";
import MobNav from "./MobNav";
import WebNav from "./WebNav";

const NavBar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return <Box>{matches ? <WebNav /> : <MobNav />} <Divider /></Box>;
};

export default NavBar;
