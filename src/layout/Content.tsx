import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { trackingShipmentTrackNum } from "../services/shipmentTrack";
import Loading from "../common/Loading";
import { useAppDispatch } from "../hooks/storeIndex";
import { setShipmentData } from "../store/shipmentSlice";
import ShipmentTracking from "../components/shipmentTracking";
import AddressAndDetails from "../components/AddressAndDetails";

const Content = () => {
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setLoading(true);
    trackingShipmentTrackNum()
      .then((res) => {
        dispatch(setShipmentData(res));
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <Box px={6} pb={8}>
      {loading ? (
        <Loading />
      ) : (
        <Box mt={5}>
          <ShipmentTracking />
          <AddressAndDetails />
        </Box>
      )}
    </Box>
  );
};

export default Content;
