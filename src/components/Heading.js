import React from 'react'
import {Link} from 'react-router-dom'
import {IoLogoLinkedin, IoLogoGithub, IoIosDocument} from 'react-icons/io'
import {
  Header,
  MainTitle,
  SubTitle,
  Social,
  A,
  Modal,
  ModalContent,
  CloseModalBtn,
  ResumeIcon,
  ResumeText,
  Icon
} from './StyledHeading'
import Resume from '../images/ResumeRBew.jpg'

const pdfStyle = {
  width: '100%',
  height: '95vh'
}

const Heading = (props) =>
  <Header>
    <div>
      <Link to='/'><MainTitle>Roman Brito</MainTitle></Link>
      <SubTitle>Full Stack Developer</SubTitle>
    </div>
    <Social>
      <A href="https://www.linkedin.com/in/roman-brito-chabrand/" target="_blank"><IoLogoLinkedin/></A>
      <A href="https://github.com/romanbrito/" target="_blank"><IoLogoGithub/></A>
      <ResumeIcon
        onClick={() => props.showModal()}
      >
        <Icon>
          <IoIosDocument/>
        </Icon>
        <ResumeText>
          CV
        </ResumeText>
      </ResumeIcon>
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
          src={Resume}
          alt="CV page 1"/>

      </ModalContent>
    </Modal>

  </Header>

export default Heading