import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    trailerVideo: null,
    topRatedMovies: null,
    trendingMovies: null,
    upcomingMovies: null,
    popularTvSeries: null,
    topRatedTvSeries: null,
    recomendedMovies: null,
  },
  reducers: {
    //action
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addPopularTvSeries: (state, action) => {
      state.popularTvSeries = action.payload;
    },
    addTopRatedTvSeries: (state, action) => {
      state.topRatedTvSeries = action.payload;
    },
    addRecomendedMovies: (state, action) => {
      state.recomendedMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addTrendingMovies,
  addPopularTvSeries,
  addTopRatedTvSeries,
  addUpcomingMovies,
  addRecomendedMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
