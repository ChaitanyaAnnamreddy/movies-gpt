import { API_URL } from '../utils/constants'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice'

const useNowPlayingMovies = () => {
  // Fetching data from TMDB and pushing it to Redux store
  const dispatch = useDispatch()

  useEffect(() => {
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
  }, [dispatch])
}

export default useNowPlayingMovies
