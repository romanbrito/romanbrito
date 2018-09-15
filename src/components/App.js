import React, {Component} from 'react'
import Heading from './Heading'
import Navigation from './Navigation'
import Contact from './Contact'
import About from './About'
import Projects from './Projects'
import {Main, CloseButton} from './StyledApp'


class App extends Component {

  state = {
    showArticle: false,
    component: ''
  }

  render() {
    return (
      <Main>
        <Heading/>
        {this.state.showArticle ?
          <div>
            <CloseButton
              onClick={() => this.closeArticle()}
            >
              CLOSE
            </CloseButton>
            <ComponentSelector component={this.state.component}/>
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
      return <Contact/>

    default:
      return null
  }

}
