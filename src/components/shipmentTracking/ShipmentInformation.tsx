import React from "react";
import { Typography, Grid, styled } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../hooks/storeIndex";
import moment from "moment";
import { checkStatus } from "../../helpers/checkStatus";

const StyledTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.black,
}));

const StyledDescription = styled(Typography)(() => ({
  fontWeight: 600,
  marginTop: 6,
}));

const ShipmentInformation = () => {
  const { t } = useTranslation();

  const {
    PromisedDate,
    CurrentStatus: { state, timestamp },
    provider,
    TrackingNumber,
  } = useAppSelector((state) => state.shipment.shipment);

  const { color } = checkStatus(state);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="baseline"
      spacing={2}
      p={2}
      sx={{ direction: "ltr" }}
    >
      <Grid item xs={12} md={3}>
        <StyledTitle variant="subtitle1">
          {t("home.delivery_time_within")}
        </StyledTitle>
        <StyledDescription variant="body1">
          {moment(PromisedDate).format("D MMMM YYYY")}
        </StyledDescription>
      </Grid>
      <Grid item xs={12} md={2}>
        <StyledTitle variant="subtitle1">{t("home.merchant_name")}</StyledTitle>
        <StyledDescription variant="body1">{provider}</StyledDescription>
      </Grid>
      <Grid item xs={12} md={3}>
        <StyledTitle variant="subtitle1">{t("home.latest_update")}</StyledTitle>
        <StyledDescription variant="body1">
          {moment(timestamp).format("dddd MM/DD/YYYY [at] h:mmA")}
        </StyledDescription>
      </Grid>
      <Grid item xs={12} md={3}>
        <StyledTitle variant="subtitle1">
          {t("home.delivery_number")} &nbsp;
          {TrackingNumber}
        </StyledTitle>
        <StyledDescription variant="body1" color={color}>
          {state}
        </StyledDescription>
      </Grid>
    </Grid>
  );
};

export default ShipmentInformation;
