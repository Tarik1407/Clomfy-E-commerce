import React from "react";
import styled from "./CartItem.module.css";
import { Box, Button, Select, Typography } from "@mui/material";
import { formatPrice, generateOptionsAmount } from "../../utilis";
import { useDispatch, useSelector } from "react-redux";
import { editItem, removeItem } from "../../features/cart/cartSlice";

const CartItem = ({ cartID, title, company, image, price, amount }) => {
  const dispatch = useDispatch();
  const color = cartID.slice(2);

  const handleAmount = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
  };

  return (
    <Box className={styled.mainItemBoxSeparate}>
      <img src={image} alt={title} />
      <Box className={styled.informationBox}>
        <Typography
          sx={{ color: "#394f6a", textTransform: "capitalize" }}
          variant="body1"
        >
          {title}
        </Typography>
        <Typography className={styled.companyParagraph} variant="body2">
          {company}
        </Typography>
        <Typography
          sx={{ display: "flex", alignItems: "center" }}
          variant="body1"
        >
          Color:
          <Box
            sx={{
              backgroundColor: color,
              height: "25px",
              width: "25px",
              borderRadius: "50%",
              cursor: "pointer",
              margin: "0.2rem",
            }}
          />
        </Typography>
      </Box>
      <Box className={styled.amountBox}>
        <Typography variant="body1">Amount</Typography>
        <Select
          onChange={handleAmount}
          sx={{ margin: "1rem 0rem" }}
          id="amount"
          name="amount"
          value={amount}
        >
          {generateOptionsAmount(amount + 5)}
        </Select>

        <Button onClick={() => dispatch(removeItem({ cartID }))}>Remove</Button>
      </Box>
      <Box>{formatPrice(price)}</Box>
    </Box>
  );
};

export default CartItem;
