const usersUrl = "https://tracking.bosta.co/shipments/track/7234258  ";

export const trackingShipmentTrackNum = () => {
  return fetch(`${usersUrl}`).then((res) => res.json());
};
