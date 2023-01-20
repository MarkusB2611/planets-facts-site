import React from 'react'
import ReactDOM from 'react-dom/client'
import styled from 'styled-components'
import App from './App'
import GlobalStyle from './globalStyles'

const Container = styled.div`
  background: url('/images/background-stars.svg');
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
`

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Container>
      <App />
    </Container>
  </React.StrictMode>,
)
