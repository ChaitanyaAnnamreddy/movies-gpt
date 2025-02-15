import { useSelector } from 'react-redux'
import useMovieTrailer from '../utils/useMovieTrailer'

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId)

  const { trailerVideo } = useSelector((store) => store.movies)
  console.log('trailerVideo', trailerVideo)
  return (
    <div>
      <iframe
        style={{ width: '100vw', aspectRatio: '16 / 9' }}
        src={`https://www.youtube.com/embed/hR1-ihzff3I?autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  )
}
export default VideoBackground
