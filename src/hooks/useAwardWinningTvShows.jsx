import { API_URL } from '../utils/constants'
import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAwardWinningTvShows } from '../utils/store/moviesSlice'

const useAwardWinningTvShows = () => {
  const dispatch = useDispatch()

  // Select data from the Redux store
  const awardWinningTvShows = useSelector(
    (state) => state.movies.awardWinningTvShows
  )

  useEffect(() => {
    // Fetch data only if it's not already in the Redux store
    if (!awardWinningTvShows || awardWinningTvShows.length === 0) {
      const getAwardWinningTvShows = async () => {
        try {
          const response = await fetch(
            'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc',
            API_URL
          )
          const json = await response.json()
          dispatch(addAwardWinningTvShows(json.results))
        } catch (error) {
          console.error('Error fetching award-winning TV shows:', error)
        }
      }
      getAwardWinningTvShows()
    }
  }, [dispatch, awardWinningTvShows])

  // Memoize the value to prevent unnecessary re-renders
  return useMemo(() => awardWinningTvShows, [awardWinningTvShows])
}

export default useAwardWinningTvShows
