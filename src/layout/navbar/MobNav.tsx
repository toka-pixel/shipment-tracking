import React, { useState } from "react";
import {
  Box,
  DialogTitle,
  Drawer,
  IconButton,
  DialogContent,
  Link,
} from "@mui/material";
import { MenuOutlined, CloseOutlined } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { navItems } from "./navItems";
import { handleLanguage } from "../../helpers/selectLanguage";

const MobNav = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Box p={1} px={6}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <IconButton onClick={handleOpen}>
          <MenuOutlined />
        </IconButton>
        <img src="/imgs/bosta.svg" alt="bosta" height={50} />
      </Box>

      <Drawer
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: { width: 240 } }}
      >
        <DialogTitle
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"baseline"}
        >
          <img src="/imgs/bosta.svg" alt="bosta" height={20} />
          <IconButton onClick={handleClose}>
            <CloseOutlined />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {navItems.map((item, index) => (
            <Link
              width={"auto"}
              display={"block"}
              onClick={() => handleLanguage(index)}
              href="#"
            >
              {t(item)}
            </Link>
          ))}
        </DialogContent>
      </Drawer>
    </Box>
  );
};

export default MobNav;
