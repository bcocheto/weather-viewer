import React from 'react'
import ForecastItem from './Item'
import { ForecastContainer, ForecastItems, SectionTitle } from './style'

const Forecast: React.FC = () => {
  const sampleData = [
    {
      day: 'Segunda',
      temp: { temp_max: 25, temp_min: 18 },
      weather: { id: 300, main: 'Chuvoso' },
    },
    {
      day: 'Terça',
      temp: { temp_max: 28, temp_min: 13 },
      weather: { id: 800, main: 'Limpo' },
    },
    {
      day: 'Quarta',
      temp: { temp_max: 12, temp_min: 0 },
      weather: { id: 800, main: 'Limpo' },
    },
    {
      day: 'Quinta',
      temp: { temp_max: 25, temp_min: 18 },
      weather: { id: 500, main: 'Chuvoso' },
    },
    {
      day: 'Monday',
      temp: { temp_max: 45, temp_min: 38 },
      weather: { id: 800, main: 'Limpo' },
    },
  ]

  return (
    <ForecastContainer>
      <SectionTitle>Semana</SectionTitle>
      <ForecastItems>
        {sampleData.map((item, i) => {
          return (
            <ForecastItem
              key={i}
              day={item.day}
              high={item.temp.temp_max}
              low={item.temp.temp_min}
              weatherCode={item.weather.id}
              main={item.weather.main}
            />
          )
        })}
      </ForecastItems>
    </ForecastContainer>
  )
}

export default Forecast
