import React, {Component} from 'react'
import Heading from './Heading'
import Navigation from './Navigation'
import Contact from './Contact'
import About from './About'
import Projects from './Projects'
import {Main, CloseButton} from './StyledApp'
import {fetchQuery} from "../Environment";


class App extends Component {

  state = {
    showArticle: false,
    component: '',
    sender:'',
    from: '',
    text: '',
    error: null
  }

  render() {
    return (
      <Main>
        <Heading showModal={this.showModal}closeModal={this.closeModal}/>
        {this.state.showArticle ?
          <div>
            <CloseButton
              onClick={() => this.closeArticle()}
            >
              CLOSE
            </CloseButton>
            <ComponentSelector component={this.state.component} onChangeInput={this.onChangeInput} sendMail={this.sendMail} error={this.state.error}/>
          </div>
          : null}
        <Navigation showArticle={this.showArticle}/>
      </Main>
    )
  }

  showArticle = component => {
    const MAIN = document.querySelector('.main')
    this.setState({
      showArticle: true,
      component: component
    })
    MAIN.setAttribute("style", "grid-template-rows: 1fr 3fr 1fr")
  }

  closeArticle = () => {
    const MAIN = document.querySelector('.main')
    if (this.state.showArticle) {
      this.setState({
        showArticle: false,
        component: ''
      })
      MAIN.setAttribute("style", "grid-template-rows: 3fr 2fr")
    }
  }

  // Show resume Modal
  showModal = () => {
    const MODAL = document.querySelector('.modal')
    MODAL.classList.remove('dn')
    MODAL.classList.add('flex', 'flex-column', 'justify-center')

    // Verify if browser supports objects if not jpeg
    const PDF_OBJECT = document.querySelector('.pdfObject')

    console.log(PDF_OBJECT)
  }

  closeModal = () => {
    const MODAL = document.querySelector('.modal')
    MODAL.classList.add('dn')
    MODAL.classList.remove('flex', 'flex-column', 'justify-center')
  }

  // Controlled component functions: onChangeInput and newState
  onChangeInput = e => {
    const {name, value} = e.target
    this.newState(name, value)
  }

  // Generate new state after input has changed
  newState = (element, newElement) => {
    const newState = Object.keys(this.state).reduce((prev, curr) => {
      curr === element ? prev[curr] = newElement : prev[curr] = this.state[curr]
      return prev
    }, {})
    this.setState(newState)
  }
  //

  sendMail = async () => {

    const {from, sender} = this.state

    const text = `${sender} wrote this:
    
    ${this.state.text}
    
    `

    const mutationText = `
   mutation SendMessageMutation($from: String!, $text: String!) {
        sendMailgunEmail(
            tag: "romanbritopro-contact",
            from: $from,
            subject: "romanbritopro contact",
            text: $text,
        ) {
            success
        }
    }
  `
    const sendMailMutation = {text: mutationText}

    if (from && text && sender) {
      const result = await fetchQuery(sendMailMutation, {from, text})
      if (result.data.sendMailgunEmail.success) {
        this.setState({
          from:'',
          text:'',
          sender: '',
          error: null
        })

        this.closeArticle()
      } else {
        this.setState({error: 'Message failed'})
      }
    } else {
      this.setState({
        error: 'Please fill all fields'
      })
    }


  }
}

export default App

// component selector

const ComponentSelector = (props) => {
  switch (props.component) {
    case 'About':
      return <About/>

    case 'Projects':
      return <Projects/>

    case 'Contact':
      return <Contact onChangeInput={props.onChangeInput} sendMail={props.sendMail} error={props.error}/>

    default:
      return null
  }

}
