import React from 'react'
import { ThemeProvider } from 'styled-components'
import HomePage from './pages/HomePage'
import { theme } from './themes/Default'
import { GlobalTheme } from './themes/GlobalTheme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalTheme />
      <HomePage />
    </ThemeProvider>
  )
}

export default App
