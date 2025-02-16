import GptMovieSuggestion from './GptMovieSuggestion'
import styled from 'styled-components'
import { Result } from 'antd'
import { useSelector } from 'react-redux'
import langConstants from '../utils/langConstants'

const BackgroundImage = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  backdrop-filter: blur(120px);
  background-color: rgb(17 24 39 / var(--tw-bg-opacity, 1));
`
const StyledResult = styled(Result)`
  padding-top: 100px;
  .ant-result-title {
    color: white !important;
  }
`

const GptSearch = () => {
  const movies = useSelector((state) => state.movies.tmdbGPTSearchMovies)
  const selectedLang = useSelector((state) => state.language.selectedLang)
  return (
    <>
      <BackgroundImage>
        {!movies ? (
          <>
            <StyledResult
              style={{ height: '90vh' }}
              status="404"
              title={langConstants.findAMovie[selectedLang]}
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
