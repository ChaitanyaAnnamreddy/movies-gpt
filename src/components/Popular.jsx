import { useSelector } from 'react-redux'
import { Carousel, Image as AntdImage, Card as AntdCard } from 'antd'
import { imageUrl } from '../utils/constants'
import styled from 'styled-components'
import { Typography } from '@mui/material'
import langConstants from '../utils/langConstants'

const { Meta } = AntdCard

const Card = styled(AntdCard)`
  background-color: transparent !important;
  border: none !important;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  .ant-card-body {
    padding: 0 10px 0px !important;
  }

  .ant-card-meta {
    margin: 0 !important;
  }

  &:hover {
    transform: scale(1.05); /* Slight zoom effect */
    box-shadow: 0px 4px 15px rgba(255, 255, 255, 0.2); /* Subtle shadow */
  }
`

const Image = styled(AntdImage)`
  border-radius: 10px !important;
`

const Popular = () => {
  const movies = useSelector((store) => store.movies?.popularMovies)
  const selectedLang = useSelector((state) => state.language.selectedLang)

  if (!movies) return null

  return (
    <>
      <Typography
        color="white"
        sx={{
          ml: 2,
          fontSize: { xs: '16px', md: '26px' },
        }}
      >
        {langConstants.popularMovies[selectedLang]}
      </Typography>
      <Carousel
        arrows
        dots={false}
        infinite
        slidesToShow={6}
        responsive={[
          { breakpoint: 1024, settings: { slidesToShow: 5 } },
          { breakpoint: 768, settings: { slidesToShow: 4 } },
          { breakpoint: 480, settings: { slidesToShow: 2 } },
        ]}
      >
        {movies.map((movie) => (
          <Card hoverable key={movie.id}>
            <Meta
              description={
                <div>
                  <Image
                    preview={false}
                    src={imageUrl + movie.poster_path}
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
