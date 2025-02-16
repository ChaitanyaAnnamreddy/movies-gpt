import { API_URL } from '../utils/constants'
import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTopRatedMovies } from '../utils/store/moviesSlice'

const useTopRatedMovies = () => {
  // Fetching data from TMDB and pushing it to Redux store
  const dispatch = useDispatch()

  // Select data from the Redux store
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies)

  useEffect(() => {
    if (!topRatedMovies || topRatedMovies.length === 0) {
      const getTopRatedMovies = async () => {
        try {
          const response = await fetch(
            'https://api.themoviedb.org/3/movie/top_rated?page=1',
            API_URL
          )
          const json = await response.json()
          dispatch(addTopRatedMovies(json.results))
        } catch (error) {
          console.error('Error fetching top rated movies:', error)
        }
      }
      getTopRatedMovies()
    }
  }, [dispatch, topRatedMovies])

  // Memoize the value to prevent unnecessary re-renders
  return useMemo(() => topRatedMovies, [topRatedMovies])
}

export default useTopRatedMovies
