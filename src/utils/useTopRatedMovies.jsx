import { API_URL } from '../utils/constants'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addTopRatedMovies } from '../utils/moviesSlice'

const useTopRatedMovies = () => {
  // Fetching data from TMDB and pushing it to Redux store
  const dispatch = useDispatch()

  useEffect(() => {
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
  }, [dispatch])
}

export default useTopRatedMovies
