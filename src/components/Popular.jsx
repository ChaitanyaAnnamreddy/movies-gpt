import { useSelector } from 'react-redux'
import { Carousel, Image as AntdImage, Card as AntdCard } from 'antd'
import { imageUrl } from '../utils/constants'
import styled from 'styled-components'
import { Typography } from '@mui/material'

const { Meta } = AntdCard

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

const Popular = () => {
  const movies = useSelector((store) => store.movies?.popularMovies)
  if (!movies) return null
  console.log('popularMovies', movies)

  return (
    <>
      <Typography
        color="white"
        sx={{
          ml: 2,
          fontSize: { xs: '16px', md: '26px' },
        }}
      >
        Popular Movies
      </Typography>
      <Carousel
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
      </Carousel>
    </>
  )
}

export default Popular
