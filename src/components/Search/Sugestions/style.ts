import styled from 'styled-components'

export const SuggestionItem = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  padding: 0.6rem 1rem;
  display: block;
  text-align: left;
  border-bottom: 1px dotted ${({ theme }) => theme.colors.gray[300]};
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[200]};
  }
`
