import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import Header from './Header'
import styled from 'styled-components'
import { backgroundImage } from '../utils/constants'

const BackgroundImage = styled.div`
  background-image: url(${backgroundImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center;
  justify-content: center;
`

const gptSearch = () => {
  return (
    <BackgroundImage>
      <Header />
      <GptSearchBar />
      <GptMovieSuggestion />
    </BackgroundImage>
  )
}
export default gptSearch
