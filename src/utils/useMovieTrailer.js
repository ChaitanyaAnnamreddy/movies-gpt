import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addTrailerVideo } from '../utils/moviesSlice'
import { API_URL } from '../utils/constants'

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getVideoUrl = async (movieId) => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/822119/videos?language=en-US`,
        API_URL
      )
      const json = await data.json()
      const filterData = json.results.find((video) => video.type === 'Trailers')
      const trailer = filterData || json.results[0]
      dispatch(addTrailerVideo(trailer.key))
    }
    getVideoUrl(movieId)
  }, [movieId, dispatch])
}
export default useMovieTrailer
