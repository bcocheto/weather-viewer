import { createGlobalStyle } from 'styled-components'

export const GlobalTheme = createGlobalStyle`
   body {
     font-family: 'Montserrat', sans-serif;
     background: ${({ theme }) => theme.colors.white};
     transition: all 0.50s linear; 
  }
`
