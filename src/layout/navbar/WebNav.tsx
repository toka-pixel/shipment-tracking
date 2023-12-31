import React from "react";
import { useTranslation } from "react-i18next";
import { Box, AppBar, Typography, useTheme, Divider } from "@mui/material";
import { navItems } from "./navItems";
import { handleLanguage } from "../../helpers/selectLanguage";

const WebNav = () => {
  const { t } = useTranslation();

  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          position: "relative",
          boxShadow: "none",
          backgroundColor: "transparent",
          color: "black",
          px: 6,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", margin: "16px 0" }}>
          <Box sx={{ flexGrow: 1, display: "flex", mr: 2 }}>
            {navItems.slice(0, 3).map((item, index) => (
              <Typography
                variant="h6"
                noWrap
                component="div"
                key={item}
                mr={5}
                sx={{
                  color: index === 0 ? theme.palette.primary.main : "",
                  cursor: "pointer",
                }}
                onClick={() => handleLanguage(index)}
              >
                {t(item)}
              </Typography>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1, display: "flex", mr: 2 }}>
            {navItems.slice(3, 6).map((item) => (
              <Typography
                variant="h6"
                noWrap
                component="div"
                key={item}
                sx={{ mr: 5 }}
              >
                {t(item)}
              </Typography>
            ))}
          </Box>
          <Box>
            <img src="/imgs/bosta.svg" alt="bosta" height={50} />
          </Box>
        </Box>
      </AppBar>
      <Divider />
    </Box>
  );
};

export default WebNav;
