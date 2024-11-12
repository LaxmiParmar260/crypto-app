import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import CoinCard from "../components/CoinCard";
import { useDispatch, useSelector } from "react-redux";
import { getTrendingCoins } from "../features/coin/coinSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { allCoins, isLoading, isError, messsage } = useSelector(
    (state) => state.coins
  );
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrendingCoins());
  }, []);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  if (isLoading) {
    return (
      <>
        <HeroSection />
        <LinearProgress sx={{ margin: "20px 0px" }} />;
      </>
    );
  }

  if (isError) {
    return (
      <>
        <HeroSection />
        <Container sx={{ margin: "20px 0px" }}>
          <Typography variant="h1" textAlign={"center"} color="error">
            Something Went Wrong
          </Typography>
        </Container>
      </>
    );
  }

  return (
    <>
      <HeroSection />
      <Typography variant="h4" textAlign={"center"} sx={{ margin: "20px 0px" }}>
        Top Trending Coins
      </Typography>

      <Container>
        {!allCoins ? (
          <>
            <Typography variant="h5" color="error" textAlign={"center"}>
              {" "}
              404 No Coins Found{" "}
            </Typography>
          </>
        ) : (
          <Grid container spacing={2}>
            {allCoins.map((coin, index) => (
              <CoinCard key={index} coin={coin} />
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
};

export default Home;
