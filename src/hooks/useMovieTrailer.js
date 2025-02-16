import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addTrailerVideo, addTrailerName } from '../utils/store/moviesSlice'
import { API_URL } from '../utils/constants'

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (!movieId) return

    const getVideoUrl = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          API_URL
        )
        const json = await response.json()

        if (json.results.length > 0) {
          const trailer =
            json.results.find((video) => video.type === 'Trailer') ||
            json.results[0]

          dispatch(addTrailerName(trailer?.name || ''))
          dispatch(addTrailerVideo(trailer?.key || ''))
        }
      } catch (error) {
        console.error('Error fetching trailer:', error)
      }
    }

    getVideoUrl()
  }, [movieId, dispatch])
}

export default useMovieTrailer
