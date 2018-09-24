import React from 'react'
import {IoLogoLinkedin, IoLogoGithub, IoIosDocument} from 'react-icons/io'
import {Header, MainTitle, SubTitle, Social, Link, Modal, ModalContent, CloseModalBtn} from './StyledHeading'
import Resume1 from '../images/ResumeRBew_Page_1.jpg'
import Resume2 from '../images/ResumeRBew_Page_2.jpg'

const pdfStyle = {
  width: '100%',
  height: '95vh'
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
          className="pdfObject dn db-ns"
          data={'pdf/ResumeRBew.pdf'}
          type="application/pdf"
          style={pdfStyle}
        >
          Your browser does not support objects
        </object>

        <img
          className="dn-ns"
          src={Resume1}
          alt="CV page 1"/>
        <img
          className="dn-ns"
          src={Resume2}
          alt="CV page 2"/>

      </ModalContent>
    </Modal>

  </Header>

export default Heading