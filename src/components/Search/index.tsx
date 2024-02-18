import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { DebounceInput } from 'react-debounce-input'
import { AppContext } from '../../context/AppContext'
import { PlaceContext } from '../../context/PlaceContext'
import { useClickOutside } from '../../hooks/useClickOutside'
import { GeoService } from '../../services/api/geolocation/GeoService'
import { LocalPlace, Place } from '../../types/Place'
import Suggestion from './Sugestions'
import { IconSearch, SearchButton, SearchElement, SearchResult, Select } from './style'

const options = [
  { value: 'openweather', label: 'OpenWeather' },
  { value: 'openmeteo', label: 'OpenMeteo' },
]

const Search: React.FC = () => {
  const suggestionRef = useRef(null)
  const [suggestions, setSuggestions] = useState<LocalPlace[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const { get } = GeoService
  const { localPlaces } = useContext(PlaceContext)
  const [selectedOption, setSelectedOption] = useState('')
  const { provider, toggleProvider, toggleLoading } = useContext(AppContext)

  useEffect(() => {
    if (searchTerm.length > 3) {
      fetchData()
    }
    setShowSuggestions(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, provider])

  const fetchData = useCallback(async () => {
    const data = await get(searchTerm)

    if (!(data instanceof Error) && data.length > 0) {
      toggleLoading(true)
      setSearchTerm('')
      const localData = generateLocalPlaceItem(data)
      removeDuplicates(localData, localPlaces)
      toggleLoading(false)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm])

  useClickOutside(suggestionRef, () => setShowSuggestions(false))

  const onSearchInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSearchTerm(e.target.value)
  }

  // Verifica se a localidade ja existe no array
  // Se existir, não adiciona
  const removeDuplicates = (places: LocalPlace[], localPlaces: LocalPlace[]) => {
    const filteredPlaces: LocalPlace[] = []

    places.forEach((place) => {
      const existingPlace = localPlaces.find((localPlace) => localPlace.lat === place.lat)

      if (!existingPlace) {
        filteredPlaces.push(place)
      }
    })
    console.log(filteredPlaces)

    setSuggestions([...filteredPlaces, ...localPlaces])
  }

  // Converter array de Place para array de LocalPlace
  const generateLocalPlaceItem = (places: Place[]) => {
    return places.map((place) => ({
      name: place.name,
      country: place.country,
      state: place.admin1,
      lat: place.latitude,
      lon: place.longitude,
    }))
  }

  const onOptionChange = (value: string) => {
    setSelectedOption(value)
    if (value === 'openmeteo') {
      toggleProvider('openmeteo')
    }
    if (value === 'openweather') {
      toggleProvider('openweather')
    }
  }

  return (
    <SearchElement>
      <DebounceInput
        element={'input'}
        onChange={onSearchInputChanged}
        placeholder={'Pesquisar uma cidade'}
      />
      <Select value={selectedOption} onChange={(e) => onOptionChange(e.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      <SearchButton
        onClick={() => {
          fetchData()
        }}
      >
        <IconSearch />
      </SearchButton>
      {showSuggestions && (
        <SearchResult ref={suggestionRef}>
          {suggestions.map((place: LocalPlace, i) => (
            <Suggestion
              key={i}
              place={place}
              provider={provider}
              hideSuggestionFn={() => {
                setShowSuggestions(false)
              }}
            />
          ))}
        </SearchResult>
      )}
    </SearchElement>
  )
}

export default Search
