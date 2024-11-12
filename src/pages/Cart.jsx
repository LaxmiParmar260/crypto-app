import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <Container sx={{ padding: "80px 0px" }}>
      <Typography variant="h5">Your Cart</Typography>

      <Grid container spacing={2} sx={{ margin: "20px 0px" }}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          {cartItems.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Card sx={{ padding: "20px" }}>
            <Typography variant="h5" gutterBottom>
              Your Total :
            </Typography>
            <Typography variant="h6" gutterBottom>
              Total Items : {cartItems.length}
            </Typography>
            <Typography variant="h4">
              Total :{" "}
              {cartItems.reduce(
                (p, c) => p + c.market_data.current_price.inr,
                0
              )}
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
