import React from 'react'
import WeatherIcon from '../../Weather/Icon'
import { ForecastItemContainer } from './style'

interface IForecastItemProps {
  day: string
  weatherCode: number
  high: number
  low: number
  main: string
}
const ForecastItem: React.FC<IForecastItemProps> = (props) => {
  return (
    <ForecastItemContainer>
      <h6>{props.day}</h6>
      <WeatherIcon code={props.weatherCode} />
      <p>{props.main}</p>
      <span>
        {props.low}
        <sup>&deg;</sup>
        <small> / </small>
        {props.high}
        <sup>&deg;</sup>
      </span>
    </ForecastItemContainer>
  )
}

export default ForecastItem
