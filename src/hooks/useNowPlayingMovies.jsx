import { API_URL } from '../utils/constants'
import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../utils/store/moviesSlice'

const useNowPlayingMovies = () => {
  // Fetching data from TMDB and pushing it to Redux store
  const dispatch = useDispatch()

  // Select data from the Redux store
  const nowPlayingMovies = useSelector((state) => state.movies.nowPlayingMovies)

  useEffect(() => {
    if (!nowPlayingMovies || nowPlayingMovies.length === 0) {
      const getNowPlayingMovies = async () => {
        try {
          const response = await fetch(
            'https://api.themoviedb.org/3/movie/now_playing?page=1',
            API_URL
          )
          const json = await response.json()
          dispatch(addNowPlayingMovies(json.results))
        } catch (error) {
          console.error('Error fetching now playing movies:', error)
        }
      }
      getNowPlayingMovies()
    }
  }, [dispatch, nowPlayingMovies])

  // Memoize the value to prevent unnecessary re-renders
  return useMemo(() => nowPlayingMovies, [nowPlayingMovies])
}

export default useNowPlayingMovies
