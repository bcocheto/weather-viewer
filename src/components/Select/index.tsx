import { useState } from 'react'
import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem,
} from './style'

const options = ['Mangoes', 'Apples', 'Oranges']

export const Select = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string>('')

  const toggling = () => setIsOpen(!isOpen)

  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value)
    setIsOpen(false)
    console.log(selectedOption)
  }

  return (
    <>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>{selectedOption || 'Mangoes'}</DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map((option: string) => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </>
  )
}
