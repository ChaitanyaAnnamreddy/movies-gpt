import { Carousel, Image, Card as AntdCard } from 'antd'
import { imageUrl } from '../utils/constants'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import {
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from '@mui/material'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { Descriptions } from 'antd'

const { Meta } = AntdCard

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

const GptMovieSuggestion = () => {
  const moviesData = useSelector((store) => store.movies?.tmdbGPTSearchMovies)
  const [open, setOpen] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(null)
  console.log('moviesData', moviesData)

  if (!moviesData || moviesData.length === 0) return null

  const handleCardClick = (movie) => {
    setSelectedMovie(movie)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setSelectedMovie(null)
  }
  return (
    <div style={{ width: '100%', backgroundColor: '#030d17', height: '100%' }}>
      {moviesData.map(
        (movies, index) =>
          movies.length > 0 && ( // Only render if inner array has more than 3 items
            <div key={index} style={{ margin: '20px 0' }}>
              <Carousel
                arrows
                dots={false}
                infinite={movies.length > 4}
                slidesToShow={6}
                // centerMode={movies.length > 6} // Center items when movies are less than 3
                responsive={[
                  {
                    breakpoint: 1024,
                    settings: { slidesToShow: 5 },
                  },
                  {
                    breakpoint: 768,
                    settings: { slidesToShow: Math.min(movies.length, 4) },
                  },
                  {
                    breakpoint: 480,
                    settings: { slidesToShow: Math.min(movies.length, 2) },
                  },
                ]}
              >
                {movies
                  .filter((movie) => movie.poster_path) // Ensure movie has a poster
                  .map((movie, i) => (
                    <div
                      key={movie.id || i}
                      style={{ display: 'flex', justifyContent: 'center' }}
                    >
                      <Card
                        hoverable
                        style={{
                          width: '100%',
                          backgroundColor: 'transparent',
                        }}
                        onClick={() => handleCardClick(movie)}
                      >
                        <Meta
                          description={
                            <div>
                              <Image
                                preview={false}
                                src={imageUrl + movie.poster_path}
                                alt={movie.title}
                                style={{
                                  borderRadius: '10px',
                                  maxWidth: '200px',
                                  height: 'auto',
                                }}
                              />
                            </div>
                          }
                        />
                      </Card>
                    </div>
                  ))}
              </Carousel>
              <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="sm"
                maxHeight="sm"
              >
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
                      <Image
                        preview={false}
                        src={imageUrl + selectedMovie.poster_path}
                        alt={selectedMovie.title}
                        width="100%"
                        style={{ margin: '10px 0' }}
                      />
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
                              ? new Date(
                                  selectedMovie.release_date
                                ).toLocaleDateString('en-GB', {
                                  day: '2-digit',
                                  month: 'long',
                                  year: 'numeric',
                                })
                              : 'N/A',
                          },
                        ]}
                        bordered
                      />
                    </DialogContent>
                  </>
                )}
              </Dialog>
            </div>
          )
      )}
    </div>
  )
}

export default GptMovieSuggestion
