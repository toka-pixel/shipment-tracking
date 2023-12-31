import { ListItem, List, Divider } from "@mui/material";
import ShipmentInformation from "./ShipmentInformation";
import ShipmentSteps from "./ShipmentSteps";

const ShipmentTracking = () => {
  return (
    <List sx={{ border: 1, borderColor: "grey.300" }}>
      <ListItem>
        <ShipmentInformation />
      </ListItem>
      <Divider />
      <ListItem>
        <ShipmentSteps />
      </ListItem>
    </List>
  );
};

export default ShipmentTracking;
