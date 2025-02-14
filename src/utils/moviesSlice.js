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
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload
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
  },
})

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addRecommendationsMovies,
  addTopRatedMovies,
  addAwardWinningTvShows,
} = moviesSlice.actions
export default moviesSlice.reducer
