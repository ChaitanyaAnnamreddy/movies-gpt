import { API_URL } from '../utils/constants'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addAwardWinningTvShows } from '../utils/moviesSlice'

const useAwardWinningTvShows = () => {
  // Fetching data from TMDB and pushing it to Redux store
  const dispatch = useDispatch()

  useEffect(() => {
    const getAwardWinningTvShows = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc',
          API_URL
        )
        const json = await response.json()
        dispatch(addAwardWinningTvShows(json.results))
      } catch (error) {
        console.error('Error fetching award winning tv shows:', error)
      }
    }
    getAwardWinningTvShows()
  }, [dispatch])
}

export default useAwardWinningTvShows
