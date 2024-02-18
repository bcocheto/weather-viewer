import { createContext, ReactNode, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { LocalPlace, Place } from '../types/Place'

type PlaceProviderProps = {
  children: ReactNode
}

type PlaceContextProps = {
  increaseItem: (place: LocalPlace) => void
  removeItems: () => void
  setPlaceSelected: (place: LocalPlace | null) => void
  localPlaces: LocalPlace[]
  placeSelected: LocalPlace | null
}

export const PlaceContext = createContext({} as PlaceContextProps)

export const PlaceProvider = ({ children }: PlaceProviderProps) => {
  const [localPlaces, setLocalPlaces] = useLocalStorage<LocalPlace[]>('places', [])
  const [placeSelected, setPlaceSelected] = useState<LocalPlace | null>(null)

  // Adiciona uma nova localidade no array do localStorage
  function increaseItem(place: LocalPlace) {
    setPlaceSelected(place)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setLocalPlaces((currentItems: any) => {
      if (currentItems.find((item: LocalPlace) => item.name === place.name) == null) {
        return [
          ...currentItems,
          {
            name: place.name,
            country: place.country,
            state: place.state,
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
              country: place.country,
              state: place.state,
              lat: place.lat,
              lon: place.lon,
            }
          }
        })
      }
    })
  }

  // TODO: Adicionar funcionalidade de remocão de itens
  function removeItems() {
    setLocalPlaces([])
  }

  return (
    <PlaceContext.Provider
      value={{
        increaseItem,
        removeItems,
        setPlaceSelected,
        localPlaces,
        placeSelected,
      }}
    >
      {children}
    </PlaceContext.Provider>
  )
}
