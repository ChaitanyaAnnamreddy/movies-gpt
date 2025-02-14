import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies)
  if (!movies) return null

  const mainMovie = movies[3]

  const { title, overview, backdrop_path, id } = mainMovie
  return (
    <div>
      <VideoTitle title={title} overview={overview} img={backdrop_path} />
      <VideoBackground movieId={id} />
    </div>
  )
}
export default MainContainer
