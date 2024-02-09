import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import HomePage from './pages/HomePage'
import { theme } from './themes/Default'
import { GlobalTheme } from './themes/GlobalTheme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalTheme />
      <HomePage />
    </ThemeProvider>
  </React.StrictMode>,
)
