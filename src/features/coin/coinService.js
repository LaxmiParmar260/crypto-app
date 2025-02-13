import axios from "axios";

const fetchTrendingCoins = async () => {
  const response = await axios.get(
    "https://api.coingecko.com/api/v3/search/trending"
  );
  return response.data.coins;
};

const fetchCoin = async (id) => {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${id}`
  );

  return response.data;
};

//to prevent to many exports because of this
const coinServices = { fetchTrendingCoins, fetchCoin };

export default coinServices;
