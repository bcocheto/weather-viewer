import React from 'react'
import GithubIcon from '../../components/Icons/Github'
import { GithubLink, HeaderContainer, HeaderIconsContainer, Title } from './style'

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>React Weather</Title>
      <HeaderIconsContainer>
        <GithubLink href='http://www.github.com/bcocheto/weather-viewer'>
          <GithubIcon />
        </GithubLink>
      </HeaderIconsContainer>
    </HeaderContainer>
  )
}

export default Header
