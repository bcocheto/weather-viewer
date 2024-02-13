import * as React from 'react'
import { SuggestionItem } from './style'

interface SuggestionProps {
  label: string
  hideSuggestionFn: () => void
}

const Suggestion: React.FC<SuggestionProps> = (props) => {
  return <SuggestionItem>{props.label}</SuggestionItem>
}

export default Suggestion
