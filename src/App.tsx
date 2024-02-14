import React from 'react'
import { ThemeProvider } from 'styled-components'
import { PlaceProvider } from './context/PlaceContext'
import HomePage from './pages/HomePage'
import { theme } from './themes/Default'
import { GlobalTheme } from './themes/GlobalTheme'

const App: React.FC = () => {
  return (
    <PlaceProvider>
      <ThemeProvider theme={theme}>
        <GlobalTheme />
        <HomePage />
      </ThemeProvider>
    </PlaceProvider>
  )
}

export default App
