import GptMovieSuggestion from './GptMovieSuggestion'
import Header from './Header'
import styled from 'styled-components'
import { Result } from 'antd'
import { useSelector } from 'react-redux'

const BackgroundImage = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  backdrop-filter: blur(120px);
  background-color: #030d17;
`
const StyledResult = styled(Result)`
  .ant-result-title {
    color: white !important;
  }
`

const GptSearch = () => {
  const movies = useSelector((state) => state.movies.tmdbGPTSearchMovies)
  return (
    <>
      <BackgroundImage>
        <Header />
        {!movies ? (
          <>
            <StyledResult
              style={{ height: '90vh' }}
              status="404"
              title="Search for a movie and let AI do the magic✨"
            />
          </>
        ) : (
          <GptMovieSuggestion />
        )}
      </BackgroundImage>
    </>
  )
}
export default GptSearch
