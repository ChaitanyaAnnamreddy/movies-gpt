import { Container, useMediaQuery } from '@mui/material'
import { Flex, Input } from 'antd'
import langConstants from '../utils/langConstants'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import model from '../utils/geminiai'
import { API_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addGptSearchMovies } from '../utils/moviesSlice'

const { Search } = Input

const GptSearchBar = () => {
  // ✅ Accept props
  const selectedLang = useSelector((state) => state.language.selectedLang)
  const [loading, setLoading] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const dispatch = useDispatch()
  const isSmallScreen = useMediaQuery('(max-width:500px)')

  const searchMovieTMDB = async (movieName) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false`,
      API_URL
    )
    const json = await response.json()
    return json.results
  }

  const handleGPTSearch = async () => {
    if (!searchValue.trim()) {
      console.warn('Search query is empty!')
      return
    }

    setLoading(true) // ✅ Use the prop function

    const gptQuery = `Act as a movie recommendation system and suggest some movies for the search query. ${searchValue}. Only give me names of 5 movies, comma-separated like the example result given ahead. Example Result: Don, Dangal, Sholay, Gadar, Golmaal`

    try {
      const result = await model.generateContent(gptQuery)

      if (!result || !result.response) {
        throw new Error('Invalid GPT response: result.response is undefined')
      }

      const responseText = await result.response.text()

      const movieNames = responseText
        .split(',')
        .map((movie) => movie.trim())
        .filter((movie) => movie)

      if (movieNames.length === 0) {
        throw new Error('GPT returned an empty list of movies')
      }

      const tmdbResults = await Promise.all(
        movieNames.map((movie) => searchMovieTMDB(movie))
      )

      dispatch(addGptSearchMovies(tmdbResults))
    } catch (error) {
      console.error('Error generating content:', error)
    } finally {
      setLoading(false) // ✅ Stop loading
    }
  }

  return (
    <Container maxWidth="2500px">
      <Flex justify="center" items="center" direction="column">
        <Search
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder={langConstants.findAMovie[selectedLang]}
          style={{ width: isSmallScreen ? '100%' : '400px' }}
          allowClear
          size="large"
          onSearch={handleGPTSearch}
          enterButton={'Search'}
          loading={loading} // ✅ Use loading prop
        />
      </Flex>
    </Container>
  )
}

export default GptSearchBar
