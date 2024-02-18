export const weatherTranslations: { [key: string]: string } = {
  'Clear': 'Céu limpo',
  'Few clouds': 'Poucas nuvens',
  'Scattered clouds': 'Nuvens dispersas',
  'Broken clouds': 'Nuvens fragmentadas',
  'Clouds': 'Nublado',
  'Rain': 'Chuva',
  'Light rain': 'Chuva leve',
  'Moderate rain': 'Chuva moderada',
  'Heavy rain': 'Chuva forte',
  'Thunderstorm': 'Tempestade',
  'Snow': 'Neve',
  'Light snow': 'Neve leve',
  'Heavy snow': 'Neve forte',
  'Drizzle':'Chuviscos',
  'Sleet': 'Granizo',
  'Mist': 'Névoa',
  'Smoke': 'Fumaça',
  'Haze': 'Haze',
  'Dust': 'Poeira',
  'Fog': 'Névoa',
  'Sand': 'Areia',
  'Ash': 'Cinzas',
  'Squall': 'Rajada',
  'Tornado': 'Tornado',
  'Partly Cloudy': 'Parcialmente nublado',
}

export function translateWeather(condition: string) {
  const translation = weatherTranslations[condition]
  if (!translation) {
    console.warn(`Condição climática desconhecida: ${condition}`)
    return condition
  }
  return translation
}
