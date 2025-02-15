import { Carousel, Image, Card as AntdCard } from 'antd'
import { imageUrl } from '../utils/constants'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

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

const GptMovieSuggestion = ({ loading }) => {
  const moviesData = useSelector((store) => store.movies?.tmdbGPTSearchMovies)
  if (!moviesData) return null

  return (
    <div style={{ width: '100%', backgroundColor: '#030d17', height: '100%' }}>
      {moviesData.map((movies) => (
        <div style={{ margin: '20px 0' }}>
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
            {movies.map((movie, index) => {
              return (
                <>
                  {movie.poster_path && (
                    <Card
                      hoverable
                      key={index}
                      style={{
                        width: '100%',
                        backgroundColor: 'transparent',
                      }}
                    >
                      <Meta
                        description={
                          <div>
                            <Image
                              preview={false}
                              src={
                                movie.poster_path
                                  ? imageUrl + movie.poster_path
                                  : imageUrl + movie.backdrop_path
                              }
                              alt={movie.title}
                              style={{ borderRadius: '10px' }}
                            />
                          </div>
                        }
                      />
                    </Card>
                  )}
                </>
              )
            })}
          </Carousel>
        </div>
      ))}
    </div>
  )
}

export default GptMovieSuggestion
