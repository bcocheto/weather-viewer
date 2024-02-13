import React from 'react'
import HighIcon from '../Icons/High'
import HumidityIcon from '../Icons/Humidity'
import LowIcon from '../Icons/Low'
import PressureIcon from '../Icons/Pressure'
import WindIcon from '../Icons/Wind'
import WeatherIcon from './Icon'
import {
  CurrentWeatherContainer,
  CurrentWeatherInfo,
  CurrentWeatherStatus,
  FeelsLike,
  HighLowContainer,
  InfoRow,
  SectionTitle,
  WeatherContainer,
  WeatherDegree,
} from './style'

const Weather: React.FC = () => {
  return (
    <WeatherContainer>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <SectionTitle>Clima Atual</SectionTitle>
      </div>
      <CurrentWeatherContainer>
        <CurrentWeatherStatus>
          <h4>Chuva</h4>
          <div style={{ display: 'flex' }}>
            <WeatherIcon code={500} big />
            <span>
              <sup>30&deg;</sup>
            </span>
          </div>
          <h6>Descrição</h6>
        </CurrentWeatherStatus>

        <CurrentWeatherInfo>
          <FeelsLike>
            Sensação Térmica 36
            <sup>&deg;</sup>
          </FeelsLike>
          <HighLowContainer>
            <WeatherDegree>
              <HighIcon />
              32
              <sup>&deg;</sup>
            </WeatherDegree>
            <WeatherDegree>
              <LowIcon />
              14
              <sup>&deg;</sup>
            </WeatherDegree>
          </HighLowContainer>
          <InfoRow>
            <div>
              <HumidityIcon /> Humidade
            </div>
            <span>90%</span>
          </InfoRow>
          <InfoRow>
            <div>
              <WindIcon /> Vento
            </div>
            <span> 15 kph</span>
          </InfoRow>
          <InfoRow>
            <div>
              <PressureIcon /> Pressão
            </div>
            <span> 2 atm </span>
          </InfoRow>
        </CurrentWeatherInfo>
      </CurrentWeatherContainer>
    </WeatherContainer>
  )
}

export default Weather
