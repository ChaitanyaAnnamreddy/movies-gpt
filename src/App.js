import './App.css'
import ButtonUsage from './components/Button'
import styled from 'styled-components'

const Header = styled.header`
  font-size: 20px;
  color: red;
`

function App() {
  return (
    <div className="App">
      <Header className="App-header">
        <p>Movies-GPT</p>
        <ButtonUsage />
      </Header>
    </div>
  )
}

export default App
