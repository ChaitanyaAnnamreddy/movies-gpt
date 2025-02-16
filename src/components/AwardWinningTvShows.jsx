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
import useMovieTrailer from '../hooks/useMovieTrailer'

const { Meta } = AntdCard

const Card = styled(AntdCard)`
  background-color: transparent !important;
  border: none !important;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  .ant-card-body {
    padding: 0 10px 20px !important;
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

const AwardWinningTvShows = () => {
  const movies = useSelector((store) => store.movies?.awardWinningTvShows)
  const selectedLang = useSelector((state) => state.language.selectedLang)

  const { trailerVideo } = useSelector((store) => store.movies)
  const { trailerName } = useSelector((store) => store.movies)
  const [open, setOpen] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(null)
  console.log('trailerVideo', trailerVideo)
  console.log('trailerName', trailerName)
  useMovieTrailer(selectedMovie?.id)

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
        {langConstants.awardWinningTvShows[selectedLang]}
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
      </Carousel>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" maxHeight="sm">
        {selectedMovie && (
          <>
            <DialogTitle>
              {trailerName}
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

export default AwardWinningTvShows
