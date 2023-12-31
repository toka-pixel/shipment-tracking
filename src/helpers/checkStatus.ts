import { ShipmentStatus } from "../enums/shipmentStatus.enum";

export const checkStatus = (status: string) => {
  let obj: { color: string; step: number } = {
    color: "",
    step: 0,
  };

  switch (status) {
    case ShipmentStatus.DELIVERED:
      obj.color = "green";
      obj.step = 3;
      break;
    case ShipmentStatus.CANCELLED:
      obj.color = "red";
      obj.step = 2;
      break;

    case ShipmentStatus.DELIVERED_TO_SENDER:
      obj.color = "#FFC107";
      obj.step = 2;
      break;
  }
  return obj;
};
