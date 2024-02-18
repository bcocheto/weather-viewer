import React, { useContext } from 'react'
import { WeatherContext } from '../../context/WeatherContext'
import { ForecastData } from '../../types/Forecast'
import { convertDate } from '../../util/Date'
import ForecastItem from './Item'
import { ForecastContainer, ForecastItems, SectionTitle } from './style'

const Forecast: React.FC = () => {
  const { forecastData } = useContext(WeatherContext)

  return (
    forecastData && (
      <ForecastContainer>
        <SectionTitle>Previsão para os próximos dias</SectionTitle>
        <ForecastItems>
          {forecastData.map((item: ForecastData, i: number) => {
            return (
              <ForecastItem
                key={i}
                day={convertDate(item.day)}
                min={Math.round(item.temp.temp_min)}
                max={Math.round(item.temp.temp_max)}
                weatherCode={item.weather.id}
                main={item.weather.main}
              />
            )
          })}
        </ForecastItems>
      </ForecastContainer>
    )
  )
}

export default Forecast
