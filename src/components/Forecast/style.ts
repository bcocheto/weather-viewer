import styled from 'styled-components'

export const ForecastContainer = styled.div`
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.default};
  border-radius: 15px;
  padding: 1.5rem 2rem;
  overflow: hidden;
`
export const SectionTitle = styled.h6`
  font-weight: 500;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.primary};
`
export const ForecastItems = styled.div`
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  gap: 1.5rem;
  > :last-child {
    margin-right: 0;
  }
`
