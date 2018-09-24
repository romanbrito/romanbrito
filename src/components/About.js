import React from 'react'
import {IoLogoHtml5, IoLogoNodejs, IoLogoCss3, IoLogoWordpress} from 'react-icons/io'
import {FaReact, FaLinux} from 'react-icons/fa'
import {Section, Article, Figure, Image, Main, Title, Content, Footer, Summary, Skills} from './StyledAbout'

const About = () =>
  <Section>
    <Article>
      <Figure>
        <Image
          src="https://res.cloudinary.com/spottermart/image/upload/c_scale,w_250/v1536690594/romanBrito/ProfilePic.jpg"
          alt="Roman Brito"/>
      </Figure>
      <Main>
        <Title>Roman Brito | Full Stack Developer</Title>
        <Content>
          <p>
            My interest in programming started in elementary school when I got my first PC and continued in high school
            when I competed in coding competitions.  I have a BA in Economics and a Masters in Finance and successfully
            completed the Full Stack Developer Boot Camp at the University of Texas.
          </p>
          <Skills><IoLogoHtml5/> <FaReact/> <IoLogoNodejs/> <FaLinux/> <IoLogoCss3/> <IoLogoWordpress/></Skills>
        </Content>
      </Main>
      <Footer>
        <Summary>Skills</Summary>
        <p>Javascript • NodeJS • ReactJS • Relay • GraphQL • MongoDB • MySQL • Linux • CSS • Sass • Github •
          Wordpress</p>
      </Footer>
    </Article>
  </Section>

export default About
