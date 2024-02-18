import React from 'react'
import WeatherIcon from '../../Weather/Icon'
import { ForecastItemContainer } from './style'

interface IForecastItemProps {
  day: string
  weatherCode: number
  min: number
  max: number
  main: string
}
const ForecastItem: React.FC<IForecastItemProps> = (props) => {
  return (
    <ForecastItemContainer>
      <h6>{props.day}</h6>
      <WeatherIcon code={props.weatherCode} />
      <p>{props.main}</p>
      <span>
        {props.min}
        <sup>&deg;</sup>
        {' - '}
        {props.max}
        <sup>&deg;</sup>
      </span>
    </ForecastItemContainer>
  )
}

export default ForecastItem
