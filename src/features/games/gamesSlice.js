import { createSlice } from "@reduxjs/toolkit";

import * as apiGames from "../../api";

const initialState = {
  loading: false,
  games: {},
};

export const gamesSlice = createSlice({
  name: "games",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    getGames(state) {
      state.loading = true;
    },
    getGamesSuccess(state, { payload }) {
      state.loading = false;
      state.games = payload;
    },
    getGamesFailed(state) {
      state.loading = false;
      state.games.hasError = true;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {},
});

export const gamesSelector = (state) => state.games;

export const { getGames, getGamesSuccess, getGamesFailed } = gamesSlice.actions;

export default gamesSlice.reducer;

export const fetchGames = () => {
  return async (dispatch) => {
    dispatch(getGames());

    try {
      const response = await apiGames.getGamesCatalog();

      dispatch(getGamesSuccess(response));
    } catch (error) {
      dispatch(getGamesFailed());
    }
  };
};
