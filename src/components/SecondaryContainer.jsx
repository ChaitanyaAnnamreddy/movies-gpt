import NowPlaying from './NowPlaying'
import Popular from './Popular'
import TopRatedMovies from './TopRatedMovies'
import { Flex } from 'antd'
import RecommendationMovies from './RecommendationMovies'
import AwardWinningTvShows from './AwardWinningTvShows'

const SecondaryContainer = () => {
  return (
    <Flex vertical gap={20} style={{ paddingBottom: '50px' }}>
      <RecommendationMovies />
      <NowPlaying />
      <TopRatedMovies />
      <AwardWinningTvShows />
      <Popular />
    </Flex>
  )
}
export default SecondaryContainer
