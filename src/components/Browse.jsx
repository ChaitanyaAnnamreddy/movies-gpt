import React from 'react'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useRecommendationsMovies from '../hooks/useRecommendations'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import { Container } from '@mui/material'
import styled from 'styled-components'
import useAwardWinningTvShows from '../hooks/useAwardWinningTvShows'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'

const StyledContainer = styled(Container)`
  padding-left: 0px !important;
  padding-right: 0px !important;
  background-color: black;
`

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useRecommendationsMovies()
  useAwardWinningTvShows()

  return (
    <StyledContainer maxWidth={false}>
      {showGptSearch ? (
        <GptSearch open={showGptSearch} />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </StyledContainer>
  )
}
export default Browse
