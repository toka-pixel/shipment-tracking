import React from "react";
import { Grid } from "@mui/material";
import DeliveryAddress from "./DeliveryAddress";
import ShipmentDetails from "./ShipmentDetails";

const AddressAndDetails = () => {
  return (
    <Grid container spacing={2} mt={2}>
      <Grid item xs={12} md={4}>
        <DeliveryAddress />
      </Grid>
      <Grid item xs={12} md={8}>
        <ShipmentDetails />
      </Grid>
    </Grid>
  );
};

export default AddressAndDetails;
