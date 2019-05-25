import React from 'react'
import {Nav, Ul, Li, A} from './StyledNavigation'

const Navigation = (props) =>
  <Nav>
    <Ul>
      <Li>
        <A
          onClick={(e) => props.showArticle(e.target.text)}
        >
          About
        </A>
      </Li>
      <Li>
        <A
          onClick={(e) => props.showArticle(e.target.text)}
        >
          Projects
        </A>
      </Li>
      <Li>
        <A
          onClick={(e) => props.showArticle(e.target.text)}
        >
          Contact
        </A>
      </Li>
    </Ul>
  </Nav>

export default Navigation