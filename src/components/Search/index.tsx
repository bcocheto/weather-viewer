import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { DebounceInput } from 'react-debounce-input'
import { PlaceContext } from '../../context/PlaceContext'
import { useClickOutside } from '../../hooks/useClickOutside'
import { GeoService } from '../../services/api/geolocation/GeoService'
import { Place } from '../../types/Place'
import Suggestion from './Sugestions'
import {
  IconLocation,
  IconSearch,
  LocationButton,
  SearchElement,
  SearchInput,
  SearchResult,
} from './style'

interface Places {
  data: Place[]
}

const Search: React.FC = () => {
  const suggestionRef = useRef(null)
  const [suggestions, setSuggestions] = useState<Places | Error>()
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const { get } = GeoService
  const { placeSelected } = useContext(PlaceContext)

  const fetchData = useCallback(async () => {
    const result = await get(searchTerm)
    if (result) {
      setSuggestions(result)
    }
  }, [get, searchTerm])

  useClickOutside(suggestionRef, () => setShowSuggestions(false))

  useEffect(() => {
    if (!searchTerm) {
      return
    }
    fetchData()
    setShowSuggestions(true)
  }, [searchTerm, fetchData])

  const onSearchInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }
  return (
    <SearchElement>
      <IconSearch />
      <DebounceInput
        element={SearchInput}
        debounceTimeout={300}
        onChange={onSearchInputChanged}
        placeholder={placeSelected ? placeSelected.name : 'Pesquisar uma cidade'}
      />
      <LocationButton
        onClick={() => {
          console.log('test')
        }}
      >
        <IconLocation />
      </LocationButton>
      {showSuggestions && (
        <SearchResult ref={suggestionRef}>
          {Array.isArray(suggestions) &&
            suggestions?.map((place: Place, i) => (
              <Suggestion
                key={i}
                place={place}
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
