import React, {Component} from 'react'
import MenuBoard from '../images/MoonMenu.jpg'
import Texadelphia from '../images/newTexadelphia.jpg'
import TrekMate from '../images/trekmate.jpg'
import {Aside, SlideShow, Figure, Image, Counter, ArrowContainer, ArrowLeft, ArrowRight} from './StyledProjects'

// image array for slide show
const imageArray = [Texadelphia, MenuBoard, TrekMate]

// slide show
class Projects extends Component {
  state = {
    n: 0
  }

  render() {

    return (
      <Aside>
        <SlideShow>
          <Figure>
            <Image
              src={imageArray[this.state.n]}
              alt="project"
            />
          </Figure>
          <Counter>{`${this.state.n + 1}/${imageArray.length} `}</Counter>
          <ArrowContainer>
            <ArrowLeft
              onClick={() => this._slideControl(-1)}
            >
              &#10094;
            </ArrowLeft>
            <ArrowRight
              onClick={() => this._slideControl(1)}
            >
              &#10095;
            </ArrowRight>
          </ArrowContainer>
        </SlideShow>
      </Aside>
    )
  }

  _slideControl = i => {
    const n = this.state.n + i
    if (n > imageArray.length - 1) this.setState({n: 0})
    else if (n < 0) this.setState({n: imageArray.length - 1})
    else this.setState({n})
  }
}

export default Projects
