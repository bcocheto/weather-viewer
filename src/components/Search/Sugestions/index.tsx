import * as React from 'react'
import { useContext } from 'react'
import { PlaceContext } from '../../../context/PlaceContext'
import { Place } from '../../../types/Place'
import { SuggestionItem } from './style'

interface SuggestionProps {
  place: Place
  hideSuggestionFn: () => void
}

const Suggestion: React.FC<SuggestionProps> = (props) => {
  const { setPlaceSelected, increaseItem, places } = useContext(PlaceContext)

  const onClick = () => {
    // Verifica se o lugar já está presente na lista de lugares
    const placeExists = places.some(
      (item) => item.name === props.place.name && item.state === props.place.state,
    )
    // Se o lugar não existe na lista de lugares, então aumenta o item e define o lugar selecionado
    if (!placeExists) {
      increaseItem(props.place)
      setPlaceSelected(props.place)
    }
    // Oculta a sugestão após um breve atraso
    setTimeout(() => {
      props.hideSuggestionFn()
    }, 100)
  }

  return (
    <>
      <SuggestionItem onClick={onClick}>
        {props.place.name}, {props.place.state}
      </SuggestionItem>
      {places.length > 0 &&
        places.map(
          (item: Place) =>
            item.name !== props.place.name &&
            item.state !== props.place.state && (
              <SuggestionItem key={item.name} onClick={onClick}>
                {item.name}, {item.state}
              </SuggestionItem>
            ),
        )}
    </>
  )
}

export default Suggestion
