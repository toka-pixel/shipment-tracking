import React from "react";
import {
  Typography,
  Box,
  Card,
  Button,
  Grid,
  CardContent,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const DeliveryAddress = () => {

  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box >
      <Typography variant="subtitle1" mb={2}> {t("home.deliveryAddress")}</Typography>
      <Card variant="outlined" sx={{ marginBottom: "10px" }}>
        <CardContent sx={{ background: theme.palette.secondary.main }}>
          {t("home.address")}
        </CardContent>
      </Card>
      <Card variant="outlined">
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={7}>
              <Typography variant="subtitle2" mb={2}>
                {t("home.problem")}
              </Typography>

              <Button
                variant="contained"
                sx={{ boxShadow: "none", borderRadius: 3 }}
              >
                {t("home.reportProblem")}
              </Button>
            </Grid>
            <Grid item xs={5} textAlign="center">
              <img src="/imgs/problem.jpg" width="100" />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DeliveryAddress;
