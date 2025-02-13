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
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ButtonUsage />
      </Header>
    </div>
  )
}

export default App
