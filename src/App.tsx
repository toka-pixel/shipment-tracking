import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Content from "./layout/Content";
import { useTranslation } from "react-i18next";
import NavBar from "./layout/navbar";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.style.direction = i18n.dir();
  }, [i18n.dir()]);

  return (
    <Box>
      <NavBar />
      <Content />
    </Box>
  );
}

export default App;
