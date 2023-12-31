import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ShipmentData } from "../types/shipmentData";

const shipment: ShipmentData = {
  provider: "",
  CurrentStatus: {
    state: "",
    timestamp: "",
  },
  PromisedDate: "",
  TrackingNumber: "",
  TrackingURL: "",
  TransitEvents: [
    {
      state: "",
      timestamp: "",
    },
  ],
};

const initialState = {
  shipment,
};

export const shipmentReducer = createSlice({
  name: "shipment",
  initialState,

  reducers: {
    setShipmentData: (state, action: PayloadAction<ShipmentData>) => {
      state.shipment = action.payload;
    },
  },
});

export const { setShipmentData } = shipmentReducer.actions;
