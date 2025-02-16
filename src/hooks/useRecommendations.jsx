import { API_URL } from '../utils/constants'
import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRecommendationsMovies } from '../utils/store/moviesSlice'

const useRecommendationsMovies = () => {
  // Fetching data from TMDB and pushing it to Redux store
  const dispatch = useDispatch()

  // Select data from the Redux store
  const recommendationsMovies = useSelector(
    (state) => state.movies.recommendationsMovies
  )

  useEffect(() => {
    if (!recommendationsMovies || recommendationsMovies.length === 0) {
      const getRecommendationsMovies = async () => {
        try {
          const response = await fetch(
            'https://api.themoviedb.org/3/movie/426063/recommendations?language=hi-IN&page=1',
            API_URL
          )
          const json = await response.json()
          dispatch(addRecommendationsMovies(json.results))
        } catch (error) {
          console.error('Error fetching recommendations movies:', error)
        }
      }
      getRecommendationsMovies()
    }
  }, [dispatch, recommendationsMovies])

  // Memoize the value to prevent unnecessary re-renders
  return useMemo(() => recommendationsMovies, [recommendationsMovies])
}

export default useRecommendationsMovies
