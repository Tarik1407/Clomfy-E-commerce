import * as React from "react";
import styled from "./OrderList.module.css";
import { useLoaderData } from "react-router-dom";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import moment from "moment";

const OrderList = () => {
  const { meta } = useLoaderData();
  const data = useLoaderData();

  return (
    <>
      <Box>
        <Typography
          sx={{ margin: "1rem 0rem", fontSize: "1.6rem", color: "#021431" }}
          variant="body1"
        >
          Your orders : {meta.pagination.total}
          <TableContainer sx={{ padding: "1rem" }} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell sx={{ marginRight: "120px" }} align="right">
                    Address
                  </TableCell>
                  <TableCell align="right">Products</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.orders.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.attributes.name}
                    </TableCell>
                    <TableCell align="right">
                      {row.attributes.address}
                    </TableCell>
                    <TableCell align="right">
                      {row.attributes.numItemsInCart}
                    </TableCell>
                    <TableCell align="right">
                      {row.attributes.orderTotal}
                    </TableCell>
                    <TableCell align="right">
                      {moment(row.attributes.updatedAt).format(
                        "hh:mm a- Do MMMM YYYY"
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Typography>
      </Box>
    </>
  );
};

export default OrderList;
