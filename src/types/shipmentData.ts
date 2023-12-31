import { TransitEvents } from "./transitEvents";

export type ShipmentData = {
  provider: string;
  CurrentStatus: {
    state: string;
    timestamp: string;
  };
  PromisedDate: string;
  TrackingNumber: string;
  TrackingURL: string;
  TransitEvents: TransitEvents[];
};
