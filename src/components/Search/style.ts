import styled from 'styled-components'
import LocationIcon from '../Icons/Location'
import SearchIcon from '../Icons/Search'

export const SearchElement = styled.div`
  position: relative;
  padding: 1rem 0.5rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.default};
  margin-bottom: 1.4rem;
  display: flex;
  align-items: center;
  z-index: 1;
`
export const SearchInput = styled.input`
  flex: 1;
  margin-left: 1rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.gray[500]};
  width: 100%;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.primary};
  }
`
export const IconSearch = styled(SearchIcon)`
  margin-left: 1.2rem;
  fill: ${({ theme }) => theme.colors.primary};
  &:hover {
    fill: ${({ theme }) => theme.colors.secondary};
  }
`
export const LocationButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  height: 100%;
  display: contents;
  &:hover svg {
  }
`
export const IconLocation = styled(LocationIcon)`
  margin-right: 1.2rem;
  fill: ${({ theme }) => theme.colors.primary};
  &:hover {
    fill: ${({ theme }) => theme.colors.secondary};
  }
`
export const SearchResult = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.default};
  width: 98%;
  left: 1%;
  top: 3.35rem;
  border-radius: 5px;
  overflow: hidden;
`
