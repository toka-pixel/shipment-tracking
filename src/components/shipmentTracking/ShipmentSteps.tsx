import React from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { checkStatus } from "../../helpers/checkStatus";
import { useAppSelector } from "../../hooks/storeIndex";

const steps = [
  "TICKET_CREATED",
  "DELIVERED_TO_SENDER",
  "OUT_FOR_DELIVERY",
  "PACKAGE_RECEIVED",
];

const ShipmentSteps = () => {
  const {
    CurrentStatus: { state },
  } = useAppSelector((state) => state.shipment.shipment);

  const { color, step } = checkStatus(state);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box sx={{ width: "100%", p: 2 }}>
      <Stepper
        activeStep={step}
        alternativeLabel
        orientation={matches ? "horizontal" : "vertical"}
        sx={{
          "& .MuiStepConnector-line": {
            borderTopWidth: "5px",
          },
          "& .Mui-active .MuiStepConnector-line ,& .Mui-completed .MuiStepConnector-line":
            {
              borderColor: color,
            },
          direction: "ltr",
        }}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
              sx={{
                "& .Mui-completed ,& .Mui-active": {
                  color: color,
                },
              }}
            >
              <Box>{label}</Box>
              {index === 2 && <Box>{state}</Box>}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};
export default ShipmentSteps;
