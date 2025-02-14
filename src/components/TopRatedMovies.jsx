import { useSelector } from 'react-redux'
import { Carousel, Image as AntdImage, Card as AntdCard } from 'antd'
import { imageUrl } from '../utils/constants'
import styled from 'styled-components'
import { Typography } from '@mui/material'

const { Meta } = AntdCard

const CarouselWrapper = styled(Carousel)`
  margin-top: 10px;

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

const TopRatedMovies = () => {
  const movies = useSelector((store) => store.movies?.topRatedMovies)
  if (!movies) return null
  console.log('topRatedMovies', movies)

  return (
    <>
      <Typography
        color="white"
        sx={{
          ml: 2, 
          fontSize: { xs: '16px', md: '26px' }, 
        }}
      >
        Top Rated Movies
      </Typography>
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

export default TopRatedMovies
