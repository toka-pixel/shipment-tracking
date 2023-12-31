import React from "react";
import { CircularProgress, Grid } from "@mui/material";

const Loading = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "60vh" }}
    >
      <CircularProgress />
    </Grid>
  );
};

export default Loading;
