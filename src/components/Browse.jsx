import Header from './Header'
import React from 'react'
import useNowPlayingMovies from '../utils/useNowPlayingMovies'
import usePopularMovies from '../utils/usePopularMovies'
import useTopRatedMovies from '../utils/useTopRatedMovies'
import useRecommendationsMovies from '../utils/useRecommendations'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import { Container } from '@mui/material'
import styled from 'styled-components'
import useAwardWinningTvShows from '../utils/useAwardWinningTvShows'

const StyledContainer = styled(Container)`
  padding-left: 0px !important;
  padding-right: 0px !important;
  background-color: black;
`

const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useRecommendationsMovies()
  useAwardWinningTvShows()

  return (
    <StyledContainer maxWidth={false}>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </StyledContainer>
  )
}
export default Browse
