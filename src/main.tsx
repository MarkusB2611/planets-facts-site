import React from 'react'
import ReactDOM from 'react-dom/client'
import styled, { ThemeProvider } from 'styled-components'
import App from './App'
import GlobalStyle from './globalStyles'
import theme from './theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
