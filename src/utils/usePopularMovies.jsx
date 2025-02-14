import { API_URL } from '../utils/constants'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../utils/moviesSlice'

const usePopularMovies = () => {
  // Fetching data from TMDB and pushing it to Redux store
  const dispatch = useDispatch()

  useEffect(() => {
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
  }, [dispatch])
}

export default usePopularMovies
