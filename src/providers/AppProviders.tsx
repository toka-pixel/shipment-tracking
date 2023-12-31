import React from "react";

import store from "../store/index";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import LangProvider from "./LangProvider";

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#e30613",
      },
      secondary: {
        main: "#eeeeee",
      },
      common: {
        black: "rgb(166 166 166 / 78%)",
      },
    },
  });

  return (
    <React.StrictMode>
      <LangProvider>
        <Provider store={store}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </Provider>
      </LangProvider>
    </React.StrictMode>
  );
};

export default AppProviders;
