import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App.jsx'
import { Theme } from './styles/Theme'
import * as S from './styles/GlobalStyle'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <S.GlobalStyle/>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
