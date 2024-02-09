import styled from 'styled-components'

export const DropDownContainer = styled('div')`
  width: max-content;
`

export const DropDownHeader = styled('div')`
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: ${({ theme }) => theme.shadows.small};
  font-weight: 500;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.primary};
`

export const DropDownListContainer = styled('div')`
  position: absolute;
  z-index: 100;
  width: 10.5em;
`

export const DropDownList = styled('ul')`
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadows.small};
  &:first-child {
    padding-top: 0.8em;
  }
`

export const ListItem = styled('li')`
  list-style: none;
  margin-bottom: 0.8em;
  &:hover {
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
  }
`
