import { Container, useMediaQuery } from '@mui/material'
import { Flex, Input } from 'antd'
import langConstants from '../utils/langConstants'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import model from '../utils/geminiai'
import { API_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addGptSearchMovies } from '../utils/store/moviesSlice'

const { Search } = Input

const GptSearchBar = () => {
  // ✅ Accept props
  const selectedLang = useSelector((state) => state.language.selectedLang)
  const [loading, setLoading] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const dispatch = useDispatch()
  const isSmallScreen = useMediaQuery('(max-width:768px)')

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

    const gptQuery = `Act as a movie recommendation system. Based on the search query: "${searchValue}", suggest up to 6 relevant movies.  
Ensure the output is in a **comma-separated format** and includes multiple related movies even if the query specifies a single movie.  
Example output: Baahubali: The Beginning, Baahubali 2: The Conclusion, RRR, Eega, Magadheera, Arundhati

### **Rules:**  
- **Strictly return only movie names, comma-separated (no explanations, numbers, or descriptions).**  
- **For genre-based queries, ensure all movies are strong representations of that genre.**  
- **Do not include movies that mix genres unless comedy is the dominant genre.**  

**Example:**  
- Input: "Telugu comedy movies"  
- Output: "Jathi Ratnalu, F2: Fun and Frustration, Brochevarevarura, Venky, Sudigadu, Bhale Bhale Magadivoy"`

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

      console.log('movieNames', movieNames)

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
      <Flex justify="end" items="center" direction="column">
        <Search
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder={langConstants.findAMovie[selectedLang]}
          style={{ width: isSmallScreen ? '100%' : '400px' }}
          allowClear
          size="large"
          onSearch={handleGPTSearch}
          enterButton={'Search'}
          loading={loading}
        />
      </Flex>
    </Container>
  )
}

export default GptSearchBar
