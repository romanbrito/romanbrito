import React, {Component} from 'react'
import MenuBoard from '../images/MenuPortrait.jpg'
import Texadelphia from '../images/texadelphiaPortrait.jpg'
import TrekMate from '../images/trekmateioPortrait.jpg'
import MenuBoardWide from '../images/Menu.jpg'
import TexadelphiaWide from '../images/texadelphia.jpg'
import TrekMateWide from '../images/trekmateio.jpg'
import {Aside, SlideShow, Figure, Image, ImageSmall, ArrowContainer, ArrowLeft, ArrowRight} from './StyledProjects'

// image array for slide show
const imageArraySmall = [Texadelphia, MenuBoard, TrekMate]
const imageArray = [TexadelphiaWide, MenuBoardWide, TrekMateWide]
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
            <ImageSmall
              src={imageArraySmall[this.state.n]}
              alt="project"
            />
            <Image
              src={imageArray[this.state.n]}
              alt="project"
            />
          </Figure>
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
