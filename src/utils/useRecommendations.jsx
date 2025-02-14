import { API_URL } from '../utils/constants'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addRecommendationsMovies } from '../utils/moviesSlice'

const useRecommendationsMovies = () => {
  // Fetching data from TMDB and pushing it to Redux store
  const dispatch = useDispatch()

  useEffect(() => {
    const getRecommendationsMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/426063/recommendations?language=en-US&page=1',
          API_URL
        )
        const json = await response.json()
        dispatch(addRecommendationsMovies(json.results))
      } catch (error) {
        console.error('Error fetching recommendations movies:', error)
      }
    }
    getRecommendationsMovies()
  }, [dispatch])
}

export default useRecommendationsMovies
