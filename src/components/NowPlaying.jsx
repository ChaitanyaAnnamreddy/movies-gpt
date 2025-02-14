import { useSelector } from 'react-redux'
import { Carousel, Image as AntdImage, Card as AntdCard } from 'antd'
import { imageUrl } from '../utils/constants'
import styled from 'styled-components'

const { Meta } = AntdCard

const CarouselWrapper = styled(Carousel)`
  margin-top: -120px;

  @media (max-width: 1024px) {
    margin-top: -80px;
    // background-color: black;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  @media (max-width: 768px) {
    margin-top: -15px;
    background-color: black;
    padding-top: 5px;
  }

  @media (max-width: 425px) {
    margin-top: -5px;
    // background-color: black;
    padding-top: 5px;
  }
`

const Card = styled(AntdCard)`
  background-color: transparent !important;
  border: none !important;

  .ant-card-body {
    padding: 0 10px 0 !important;
  }
  .ant-card-meta {
    margin: 0 !important;
  }
`

const Image = styled(AntdImage)`
  border-radius: 10px !important;
`

const NowPlaying = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies)
  if (!movies) return null
//   console.log('movies', movies)

  return (
    <>
      <CarouselWrapper
        arrows
        dots={false}
        infinite
        slidesToShow={4}
        responsive={[
          { breakpoint: 1024, settings: { slidesToShow: 3 } },
          { breakpoint: 768, settings: { slidesToShow: 2 } },
          { breakpoint: 480, settings: { slidesToShow: 1 } },
        ]}
      >
        {movies.map((movie) => (
          <Card hoverable key={movie.id}>
            <Meta
              description={
                <div>
                  <Image
                    preview={false}
                    src={imageUrl + movie.backdrop_path}
                    alt="res-logo"
                    sx={{ borderRadius: '10px' }}
                  />
                </div>
              }
            />
          </Card>
        ))}
      </CarouselWrapper>
    </>
  )
}

export default NowPlaying
