import * as React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../../context/AppContext'
import { PlaceContext } from '../../../context/PlaceContext'
import { WeatherContext } from '../../../context/WeatherContext'
import { LocalPlace } from '../../../types/Place'
import { SuggestionItem } from './style'

interface SuggestionProps {
  place: LocalPlace
  provider: 'openweather' | 'openmeteo'
  hideSuggestionFn: () => void
}

const Suggestion: React.FC<SuggestionProps> = (props) => {
  const { setPlaceSelected, increaseItem, localPlaces } = useContext(PlaceContext)
  const { place, provider } = props
  const {
    setCurrentWeather,
    fetchOpenMeteoCurrentWeather,
    fetchOpenMeteoForecastData,
    fetchOpenWeatherCurrentWeather,
    fetchOpenWeatherForecastData,
  } = useContext(WeatherContext)
  const { toggleLoading } = useContext(AppContext)

  const verifyPlaceExists = (): boolean => {
    return localPlaces.some((item) => item.name === place.name && item.country === place.country)
  }

  // Chamar função de busca conforme o provider
  const callFuncWithProvider = (place: LocalPlace): void => {
    if (provider === 'openweather') {
      toggleLoading(true)
      fetchOpenWeatherCurrentWeather(place)
      fetchOpenWeatherForecastData(place)
      toggleLoading(false)
    }
    if (provider === 'openmeteo') {
      toggleLoading(true)
      fetchOpenMeteoCurrentWeather(place)
      fetchOpenMeteoForecastData(place)
      toggleLoading(false)
    }
  }

  const onClick = () => {
    setCurrentWeather(null)
    if (!verifyPlaceExists()) {
      increaseItem(place)
    }
    callFuncWithProvider(place)
    setPlaceSelected(place)
    setTimeout(() => {
      props.hideSuggestionFn()
    }, 100)
  }

  return (
    <SuggestionItem onClick={onClick}>
      {place.name}, {place.state} - {place.country}
    </SuggestionItem>
  )
}

export default Suggestion
