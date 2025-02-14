import NowPlaying from './NowPlaying'
import Popular from './Popular'
import TopRatedMovies from './TopRatedMovies'
import { Flex } from 'antd'
import RecommendationMovies from './RecommendationMovies'

const SecondaryContainer = () => {
  return (
    <Flex vertical gap={20}>
      <RecommendationMovies />
      <NowPlaying />
      <TopRatedMovies />
      <Popular />
    </Flex>
  )
}
export default SecondaryContainer
