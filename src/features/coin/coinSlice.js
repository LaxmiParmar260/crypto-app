import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import coinServices from "./coinService";

const coinSlice = createSlice({
  name: "coins",
  initialState: {
    isLoading: false,
    isError: true,
    isSuccess: false,
    allCoins: null,
    coin: null,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTrendingCoins.pending, (state, action) => {
        (state.isLoading = true),
          (state.isSuccess = false),
          (state.isError = false);
      })
      .addCase(getTrendingCoins.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.isSuccess = true),
          (state.isError = false),
          (state.allCoins = action.payload);
      })
      .addCase(getTrendingCoins.rejected, (state, action) => {
        (state.isLoading = false),
          (state.isSuccess = false),
          (state.isError = true),
          (state.message = action.payload);
      })
      .addCase(getCoin.pending, (state, action) => {
        (state.isLoading = true),
          (state.isSuccess = false),
          (state.isError = false);
      })
      .addCase(getCoin.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.isSuccess = true),
          (state.isError = false),
          (state.coin = action.payload);
      })
      .addCase(getCoin.rejected, (state, action) => {
        (state.isLoading = false),
          (state.isSuccess = false),
          (state.isError = true),
          (state.message = action.payload);
      });
  },
});
export default coinSlice.reducer;

//Fecth Coins and set into state and using ThunkAPI

export const getTrendingCoins = createAsyncThunk("FETCH/COINS", async () => {
  try {
    return await coinServices.fetchTrendingCoins();
  } catch (error) {
    console.log(error);
  }
});

//Fecth Coin and set into state and using ThunkAPI

export const getCoin = createAsyncThunk("FETCH/COIN", async (id) => {
  try {
    return await coinServices.fetchCoin(id);
  } catch (error) {
    console.log(error);
  }
});
