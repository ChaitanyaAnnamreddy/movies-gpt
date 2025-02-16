import { createSlice } from '@reduxjs/toolkit'

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    recommendationsMovies: null,
    topRatedMovies: null,
    awardWinningTvShows: null,
    tmdbGPTSearchMovies: null,
    trailerName: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload
    },
    addTrailerName: (state, action) => {
      state.trailerName = action.payload
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload
    },
    addRecommendationsMovies: (state, action) => {
      state.recommendationsMovies = action.payload
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload
    },
    addAwardWinningTvShows: (state, action) => {
      state.awardWinningTvShows = action.payload
    },
    addGptSearchMovies: (state, action) => {
      state.tmdbGPTSearchMovies = action.payload
    },
    clearMovies: (state) => {
      state.tmdbGPTSearchMovies = null
    },
  },
})

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addTrailerName,
  addPopularMovies,
  addRecommendationsMovies,
  addTopRatedMovies,
  addAwardWinningTvShows,
  addGptSearchMovies,
  clearMovies,
} = moviesSlice.actions
export default moviesSlice.reducer
