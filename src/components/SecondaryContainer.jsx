import NowPlaying from './NowPlaying'
import Popular from './Popular'
import TopRatedMovies from './TopRatedMovies'
import { Flex } from 'antd'

const SecondaryContainer = () => {
  return (
    <Flex vertical gap={20}>
      <NowPlaying />
      <TopRatedMovies />
      <Popular />
    </Flex>
  )
}
export default SecondaryContainer
