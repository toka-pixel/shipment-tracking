import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  styled,
} from "@mui/material";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { TransitEvents } from "../types/transitEvents";
import { useAppSelector } from "../hooks/storeIndex";
import { checkStatus } from "../helpers/checkStatus";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  background: theme.palette.secondary.main,
  color: theme.palette.secondary.dark,
  fontWeight: 700,
}));

type TableDataProps = {
  rows: TransitEvents[];
};

const TableData: React.FC<TableDataProps> = ({ rows }) => {
  const { t } = useTranslation();

  const {
    CurrentStatus: { state },
  } = useAppSelector((state) => state.shipment.shipment);

  const { color } = checkStatus(state);

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <StyledTableCell>{t("home.Details")}</StyledTableCell>
            <StyledTableCell>{t("home.Date")}</StyledTableCell>
            <StyledTableCell>{t("home.Time")}</StyledTableCell>
            <StyledTableCell>{t("home.Hub")}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any, index) => (
            <TableRow
              key={row.timestamp}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th">
                <Box>{row.state}</Box>
                <Box color={rows.length - 1 === index ? color : ""}>
                  {row?.reason}
                </Box>
              </TableCell>
              <TableCell>{moment(row.timestamp).format("LT")}</TableCell>
              <TableCell>{moment(row.timestamp).format("L")}</TableCell>
              <TableCell>{row.hub}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableData;
