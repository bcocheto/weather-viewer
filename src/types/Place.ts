interface Place {
  id: number
  name: string
  latitude: number
  longitude: number
  elevation: number
  feature_code: string
  country_code: string
  admin1_id: number
  admin2_id: number
  timezone: string
  population: number
  country_id: number
  country: string
  admin1: string
  admin2: string
}

interface LocalPlace {
  name: string
  lat: number
  lon: number
  state: string
  country: string
}

export type { LocalPlace, Place }
