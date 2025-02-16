import { API_URL } from '../utils/constants'
import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPopularMovies } from '../utils/store/moviesSlice'

const usePopularMovies = () => {
  // Fetching data from TMDB and pushing it to Redux store
  const dispatch = useDispatch()

  // Select data from the Redux store
  const popularMovies = useSelector((state) => state.movies.popularMovies)

  useEffect(() => {
    if (!popularMovies || popularMovies.length === 0) {
      const getPopularMovies = async () => {
        try {
          const response = await fetch(
            'https://api.themoviedb.org/3/movie/popular?page=1',
            API_URL
          )
          const json = await response.json()
          dispatch(addPopularMovies(json.results))
        } catch (error) {
          console.error('Error fetching popular movies:', error)
        }
      }
      getPopularMovies()
    }
  }, [dispatch, popularMovies])

  // Memoize the value to prevent unnecessary re-renders
  return useMemo(() => popularMovies, [popularMovies])
}

export default usePopularMovies
