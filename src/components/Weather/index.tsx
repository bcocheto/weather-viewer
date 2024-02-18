import React, { useContext } from 'react'
import { WeatherContext } from '../../context/WeatherContext'
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
  const { currentWeather } = useContext(WeatherContext)

  return (
    <>
      {currentWeather && (
        <WeatherContainer>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <SectionTitle>Clima</SectionTitle>
          </div>
          <CurrentWeatherContainer>
            <CurrentWeatherStatus>
              <h4>{currentWeather.name}</h4>
              <div style={{ display: 'flex' }}>
                <WeatherIcon code={currentWeather?.weather?.id} big />
                <span>
                  {Math.round(currentWeather?.main?.temp)}
                  <sup>&deg;</sup>
                </span>
              </div>
              <h6>{currentWeather?.weather?.main}</h6>
            </CurrentWeatherStatus>

            <CurrentWeatherInfo>
              <FeelsLike>
                Sensação Térmica {Math.round(currentWeather?.main?.feels_like)}
                <sup>&deg;</sup>
              </FeelsLike>
              <HighLowContainer>
                {currentWeather.main.temp_max > 0 && (
                  <>
                    <WeatherDegree>
                      <HighIcon />
                      {Math.round(currentWeather.main.temp_max)}
                      <sup>&deg;</sup>
                    </WeatherDegree>
                    <WeatherDegree>
                      <LowIcon />
                      {Math.round(currentWeather.main.temp_min)}
                      <sup>&deg;</sup>
                    </WeatherDegree>
                  </>
                )}
              </HighLowContainer>
              <InfoRow>
                <div>
                  <HumidityIcon /> Humidade
                </div>
                <span>{Math.round(currentWeather?.main?.humidity)} %</span>
              </InfoRow>
              <InfoRow>
                <div>
                  <WindIcon /> Vento
                </div>
                <span> {Math.round(currentWeather?.wind?.speed)} kph</span>
              </InfoRow>
              <InfoRow>
                <div>
                  <PressureIcon /> Pressão
                </div>
                <span> {Math.round(currentWeather?.main?.pressure)} </span>
              </InfoRow>
            </CurrentWeatherInfo>
          </CurrentWeatherContainer>
        </WeatherContainer>
      )}
    </>
  )
}

export default Weather
