import { useSelector } from 'react-redux'
import { Carousel, Image as AntdImage, Card as AntdCard } from 'antd'
import { imageUrl } from '../utils/constants'
import styled from 'styled-components'
import {
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from '@mui/material'
import langConstants from '../utils/langConstants'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { Descriptions } from 'antd'
import useMovieTrailer from '../utils/useMovieTrailer'

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
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  .ant-card-body {
    padding: 0 10px 0 !important;
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

const NowPlaying = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies)
  const selectedLang = useSelector((state) => state.language.selectedLang)

  const [open, setOpen] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(null)
  useMovieTrailer(selectedMovie?.id)

  const { trailerVideo } = useSelector((store) => store.movies)
  if (!movies) return null

  const handleCardClick = (movie) => {
    setSelectedMovie(movie)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setSelectedMovie(null)
  }

  return (
    <>
      <Typography
        color="white"
        sx={{
          ml: 2,
          fontSize: { xs: '16px', md: '26px' },
        }}
      >
        {langConstants.nowPlaying[selectedLang]}
      </Typography>
      <CarouselWrapper
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
          <Card hoverable key={movie.id} onClick={() => handleCardClick(movie)}>
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
      </CarouselWrapper>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" maxHeight="sm">
        {selectedMovie && (
          <>
            <DialogTitle>
              {selectedMovie.title}
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{ position: 'absolute', right: 8, top: 8 }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers>
              <Typography variant="body1" gutterBottom>
                {selectedMovie.overview || 'No description available.'}
              </Typography>
              {trailerVideo && (
                <iframe
                  style={{
                    width: '100%',
                    aspectRatio: '16 / 9',
                    margin: '15px 0px',
                  }}
                  src={`https://www.youtube.com/embed/${trailerVideo}?autoplay=1&mute=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              )}
              <Descriptions
                items={[
                  {
                    key: '1',
                    label: 'Avg Rating',
                    children: selectedMovie.vote_average,
                  },
                  {
                    key: '2',
                    label: 'Release Date',
                    children: selectedMovie.release_date
                      ? new Date(selectedMovie.release_date).toLocaleDateString(
                          'en-GB',
                          {
                            day: '2-digit',
                            month: 'long',
                            year: 'numeric',
                          }
                        )
                      : 'N/A',
                  },
                ]}
                bordered
              />
            </DialogContent>
          </>
        )}
      </Dialog>
    </>
  )
}

export default NowPlaying
