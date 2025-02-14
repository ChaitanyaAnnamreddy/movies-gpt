import { Container } from '@mui/material'
import { Flex, Input } from 'antd'
import langConstants from '../utils/langConstants'
import { useSelector } from 'react-redux'

const { Search } = Input

const GptSearch = () => {
  const selectedLang = useSelector((state) => state.language.selectedLang)
  return (
    <Container
      maxWidth="2500px"
      sx={{
        padding: '0px !important',
        height: '90vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Flex
        justify="center"
        items="center"
        direction="column"
        style={{
          position: 'fixed',
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Search
          style={{ width: 400 }}
          placeholder={langConstants.findAMovie[selectedLang]}
          enterButton
          allowClear
          size="large"
        />
      </Flex>
    </Container>
  )
}
export default GptSearch
