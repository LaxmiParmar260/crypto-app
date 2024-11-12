import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Hero from "../assets/hero.png";
import React from "react";

const HeroSection = () => {
  const customStyle = {
    padding: "50px 0px",
  };

  return (
    <Container sx={customStyle}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: "flex",

              justifyContent: "center",
              flexDirection: "column",
              height: "500px",
            }}
          >
            <Typography variant="h3" gutterBottom>
              Crypto Bazar At Your Hand.
            </Typography>
            <Typography variant="body2" gutterBottom>
              Shop Crypto 24/7 Everywhere Anytime
            </Typography>
            <Button variant="contained" color="success">
              Buy Now
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>
            <img style={{ height: "500px" }} src={Hero} alt="" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroSection;
