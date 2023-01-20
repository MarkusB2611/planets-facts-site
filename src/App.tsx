import styled from 'styled-components'
import Navbar from './components/layout/navbar'

function App() {
  return (
    <Container>
      <Navbar />
    </Container>
  )
}

const Container = styled.div`
  background: url('/images/background-stars.svg');
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
`

export default App
