import React, { useEffect, useRef, useState } from 'react'
import { DebounceInput } from 'react-debounce-input'
import Suggestion from './Sugestions'
import {
  IconLocation,
  IconSearch,
  LocationButton,
  SearchElement,
  SearchInput,
  SearchResult,
} from './style'

const Search: React.FC = () => {
  const suggestionRef = useRef('')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    if (!searchTerm) {
      return
    }
    setShowSuggestions(true)
  }, [searchTerm])

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
        placeholder='Search for location'
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
          {suggestions?.slice(0, 6)?.map((s, i) => (
            <Suggestion
              key={i}
              label={s}
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
