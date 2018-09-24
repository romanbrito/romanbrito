import React from 'react'
import {IoLogoLinkedin, IoLogoGithub, IoIosDocument} from 'react-icons/io'
import {Header, MainTitle, SubTitle, Social, Link, Modal, ModalContent, CloseModalBtn} from './StyledHeading'

const pdfStyle = {
  width: '100%',
  height: '100vh'
}

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
      <ModalContent>
        <CloseModalBtn
          onClick={() => props.closeModal()}
        >
          CLOSE
        </CloseModalBtn>
        <object
          data={'pdf/ResumeRBew.pdf'}
          type="application/pdf"
          style={pdfStyle}
        >
          Your browser does not support objects
        </object>

      </ModalContent>
    </Modal>

  </Header>

export default Heading