import { configureStore } from "@reduxjs/toolkit";
import { shipmentReducer } from "./shipmentSlice";

const store = configureStore({
  reducer: {
    shipment: shipmentReducer.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
