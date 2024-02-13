import styled from 'styled-components'

export const FooterContainer = styled.footer`
  p {
    padding: 1rem 0;
    font-size: 1rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    a {
      color: #1a5a73;
    }
  }
`
