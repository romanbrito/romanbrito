import styled from 'styled-components'

export const Nav = styled.nav.attrs({
  className: "bg-near-white h-100"
})``

export const Ul = styled.ul.attrs({
  className: "pa0 ma0 h-100 flex flex-column justify-between items-center content-center"
})`
  padding: 1rem 0;
  
  @media (min-width: 740px) {
    flex-direction: row;
  }
`

export const Li = styled.li.attrs({
  className: "list tc ba mh5-ns bn-ns bg-navy flex flex-column justify-center w-100 h-100"
})`
    @media screen and (min-width: 480px) {
    background: none;
  }
  
    @media (min-width: 740px) {
      
  }
`

export const A = styled.a.attrs({
  className: "link pointer white bg-navy pa4 br3"
})``
