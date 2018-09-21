import React from 'react'
import {IoLogoLinkedin, IoLogoGithub, IoIosDocument} from 'react-icons/io'
import {Header, MainTitle, SubTitle, Social, Link} from './StyledHeading'

const Heading = () =>
  <Header>
    <div>
      <MainTitle>Roman Brito</MainTitle>
      <SubTitle>Full Stack Developer</SubTitle>
    </div>
    <Social>
      <Link href="https://www.linkedin.com/in/roman-brito-chabrand/" target="_blank"><IoLogoLinkedin/></Link>
      <Link href="https://github.com/romanbrito/" target="_blank"><IoLogoGithub/></Link>
      <Link href="https://github.com/romanbrito/" target="_blank"><IoIosDocument/></Link>
    </Social>
  </Header>

export default Heading