import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 16px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  position: fixed;
  box-shadow: ${({ theme }) => theme.shadows.small};
  top: 0;
  left: 0;
  z-index: 10;
`

export const NavTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.large};
`
export const NavWeatherSelector = styled.select``
