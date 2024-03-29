import React from 'react'
import CloudyIcon from '../../Icons/Cloudy'
import HazeIcon from '../../Icons/Haze'
import HeavyRainIcon from '../../Icons/HeavyRain'
import PartlyCloudyIcon from '../../Icons/PartlyCloudy'
import RainIcon from '../../Icons/Rain'
import SleetIcon from '../../Icons/Sleet'
import SnowIcon from '../../Icons/Snow'
import SunnyIcon from '../../Icons/Sunny'
import ThunderstormIcon from '../../Icons/Thunderstorm'

interface IWeatherIconProps {
  code: number
  big?: boolean
}

const WeatherIcon: React.FC<IWeatherIconProps> = (props) => {
  let Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>

  switch (props.code) {
    // Clear
    case 0:
    case 800:
      Icon = SunnyIcon
      break

    // Cloud
    case 1:
    case 2:
    case 3:
    case 801:
    case 802:
      Icon = PartlyCloudyIcon
      break
    case 803:
    case 804:
      Icon = CloudyIcon
      break

    // Rain
    case 500:
    case 61:
    case 63:
    case 65:
    case 501:
    case 520:
    case 521:
    case 511:
      Icon = RainIcon
      break
    case 66:
    case 67:
    case 80:
    case 81:
    case 82:
    case 502:
    case 503:
    case 504:
    case 522:
    case 531:
      Icon = HeavyRainIcon
      break

    // Drizzle
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
    case 300:
    case 301:
    case 302:
    case 310:
    case 311:
    case 312:
    case 313:
    case 314:
    case 321:
      Icon = RainIcon
      break

    // Thunderstorm
    case 95:
    case 96:
    case 99:
    case 201:
    case 202:
    case 210:
    case 211:
    case 212:
    case 221:
    case 230:
    case 231:
    case 232:
      Icon = ThunderstormIcon
      break

    // Snow
    case 71:
    case 73:
    case 75:
    case 600:
    case 601:
    case 602:
    case 612:
    case 613:
    case 615:
    case 616:
    case 620:
    case 621:
    case 622:
      Icon = SnowIcon
      break
    case 77:
    case 85:
    case 86:
    case 611:
      Icon = SleetIcon
      break

    // Atmosphere
    case 45:
    case 48:
    case 701:
    case 711:
    case 721:
    case 731:
    case 741:
    case 751:
    case 761:
    case 762:
    case 771:
    case 781:
      Icon = HazeIcon
      break

    default:
      Icon = SunnyIcon
  }
  return props.big ? <Icon style={{ width: '100px', height: '100px' }} /> : <Icon />
}

export default WeatherIcon
