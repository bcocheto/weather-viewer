import { Select } from '../Select'
import { Container, NavTitle } from './style'

// values = {
//   'openweathermap.org': 'OpenWeatherMap',
//   'accuweather.com': 'AccuWeather',
//   'climatic.com': 'Climatic',
// }

export const NavBar = () => {
  return (
    <>
      <Container>
        <NavTitle>Weather Viewer</NavTitle>
        <Select />
      </Container>
    </>
  )
}
