import React, { useMemo } from "react";
import TableData from "../common/TableData";
import { Typography } from "@mui/material";
import { useAppSelector } from "../hooks/storeIndex";
import { arabicApiRes } from "../locales/arabicApiRes";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { TransitEvents } from "../types/transitEvents";

const ShipmentDetails = () => {
  const { TransitEvents } = useAppSelector((state) => state.shipment.shipment);
  const { t } = useTranslation();
  const lang = i18next.language;

  const getTranslatedObject = (obj: TransitEvents, index: number) => {
    if (lang === "ar") {
      return {
        ...obj,
        state: arabicApiRes[index]?.state || obj?.state,
        reason: arabicApiRes[index]?.reason || obj?.reason,
        hub: arabicApiRes[index]?.hub || obj?.hub,
      };
    }
    return obj;
  };

  const transitEvents = useMemo(() => {
    return TransitEvents?.map((obj: TransitEvents, index: number) =>
      getTranslatedObject(obj, index)
    );
  }, [TransitEvents, lang]);

  return (
    <>
      <Typography mb={2} variant="subtitle1">
        {t("home.shipmentDetails")}
      </Typography>
      <TableData rows={transitEvents ?? []} />
    </>
  );
};

export default ShipmentDetails;
