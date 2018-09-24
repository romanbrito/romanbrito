import React from 'react'
import {IoLogoLinkedin, IoLogoGithub, IoIosDocument} from 'react-icons/io'
import {Header, MainTitle, SubTitle, Social, Link, Modal} from './StyledHeading'

const Heading = (props) =>
  <Header>
    <div>
      <MainTitle>Roman Brito</MainTitle>
      <SubTitle>Full Stack Developer</SubTitle>
    </div>
    <Social>
      <Link href="https://www.linkedin.com/in/roman-brito-chabrand/" target="_blank"><IoLogoLinkedin/></Link>
      <Link href="https://github.com/romanbrito/" target="_blank"><IoLogoGithub/></Link>
      <Link
        onClick={() => props.showModal()}
      ><IoIosDocument/></Link>
    </Social>
    <Modal>
      This is the modal
    </Modal>

  </Header>

export default Heading