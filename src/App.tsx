import React from 'react'
import { ThemeProvider } from 'styled-components'
import { AppProvider } from './context/AppContext'
import { PlaceProvider } from './context/PlaceContext'
import { WeatherProvider } from './context/WeatherContext'
import HomePage from './pages/HomePage'
import { theme } from './themes/Default'
import { GlobalTheme } from './themes/GlobalTheme'

const App: React.FC = () => {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <PlaceProvider>
          <WeatherProvider>
            <GlobalTheme />
            <HomePage />
          </WeatherProvider>
        </PlaceProvider>
      </ThemeProvider>
    </AppProvider>
  )
}

export default App
