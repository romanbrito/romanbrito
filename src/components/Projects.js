import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import MenuBoardPort from '../images/MenuPortrait.jpg'
import TexadelphiaPort from '../images/texadelphiaPortrait.jpg'
import TrekMatePort from '../images/trekmateioPortrait.jpg'
import MenuBoardWide from '../images/Menu.jpg'
import TexadelphiaWide from '../images/texadelphia.jpg'
import TrekMateWide from '../images/trekmateio.jpg'
import itunesReactWide from '../images/itunesReact.jpg'
import itunesReactPort from '../images/itunesReactPortrait.jpg'
import {
  Aside,
  SlideShow,
  Figure,
  Image,
  ImageSmall,
  ArrowContainer,
  ArrowLeft,
  ArrowRight,
  TitleContainer,
  A
} from './StyledProjects'

class Portfolio {
  constructor(imagePortrait, imageWide, title, subtitle, url) {
    this.imagePortrait = imagePortrait
    this.imageWide = imageWide
    this.title = title
    this.subtitle = subtitle
    this.url = url
  }
}

const texadelphia = new Portfolio(TexadelphiaPort, TexadelphiaWide, 'Texadelphia', 'Website', 'https://www.texadelphia.com')
const menuBoard = new Portfolio(MenuBoardPort, MenuBoardWide, 'Menu', 'Digital Menu Boards', '/MenuBoards.html')
const trekmate = new Portfolio(TrekMatePort, TrekMateWide, 'trekmate.io', 'Travel App', 'http://trekmate.io')
const itunesReact = new Portfolio(itunesReactPort, itunesReactWide, 'itunes ReactJS', '' , 'https://whispering-oasis-63624.herokuapp.com/')

// image array for slide show
const projectArray = [texadelphia, menuBoard, itunesReact]

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
              src={projectArray[this.state.n].imagePortrait}
              alt="project"
            />
            <Image
              src={projectArray[this.state.n].imageWide}
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
          <TitleContainer>
            {
              projectArray[this.state.n].title !== 'Menu' ?
                <A href={projectArray[this.state.n].url} target="_blank"><h1>{projectArray[this.state.n].title}</h1></A>:
                <Link to='MenuBoards'><h1>{projectArray[this.state.n].title}</h1></Link>
            }

            <h2>{projectArray[this.state.n].subtitle}</h2>
          </TitleContainer>

        </SlideShow>
      </Aside>
    )
  }

  _slideControl = i => {
    const n = this.state.n + i
    if (n > projectArray.length - 1) this.setState({n: 0})
    else if (n < 0) this.setState({n: projectArray.length - 1})
    else this.setState({n})
  }
}

export default Projects
