import { createContext, ReactNode, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { Place } from '../types/Place'

type PlaceProviderProps = {
  children: ReactNode
}

type PlaceContextProps = {
  increaseItem: (place: Place) => void
  removeItems: () => void
  setPlaceSelected: (place: Place | null) => void
  places: Place[]
  placeSelected: Place | null
}

export const PlaceContext = createContext({} as PlaceContextProps)

export const PlaceProvider = ({ children }: PlaceProviderProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [places, setPlaces] = useLocalStorage<Place[]>('places', [])
  const [placeSelected, setPlaceSelected] = useState<Place | null>(null)

  function increaseItem(place: Place) {
    setPlaceSelected(place)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setPlaces((currentItems: any) => {
      if (currentItems.find((item: Place) => item.name === place.name) == null) {
        return [
          ...currentItems,
          {
            name: place.name,
            state: place.state,
            country: place.country,
            lat: place.lat,
            lon: place.lon,
          },
        ]
      } else {
        return currentItems.map((item: Place) => {
          if (item.name === place.name) {
            return {
              ...item,
              name: place.name,
              state: place.state,
              country: place.country,
              lat: place.lat,
              lon: place.lon,
            }
          }
        })
      }
    })
  }

  function removeItems() {
    setPlaces([])
  }

  return (
    <PlaceContext.Provider
      value={{
        increaseItem,
        removeItems,
        setPlaceSelected,
        places,
        placeSelected,
      }}
    >
      {children}
    </PlaceContext.Provider>
  )
}
