import styled from 'styled-components'

export const Aside = styled.aside.attrs({
  className: "pt4 pt0-ns flex flex-column justify-center h-100"
})``

export const SlideShow = styled.div.attrs({
  className: "black w-100 center"
})`
  display: grid;
  @media screen and (min-width: 1025px) {
    width: 50%;
  }
`

export const Figure = styled.figure.attrs({
  className: ""
})`
  grid-column: 1;
  grid-row: 1;
`

export const Image = styled.img.attrs({
  className: "w-100 br4 dn db-ns"
})``

export const ImageSmall = styled.img.attrs({
  className: "w-100 br4 dn-ns"
})``

export const ArrowContainer = styled.div.attrs({
  className: "flex items-center justify-between"
})`
  grid-column: 1;
  grid-row: 1;
`

export const ArrowLeft = styled.button.attrs({
  className:"bg-transparent bn pointer white f1 pl5"
})`
  :focus {
     outline: none;
  }
`

export const ArrowRight = styled.button.attrs({
  className:"bg-transparent bn pointer white f1 pr5"
})`
  :focus {
     outline: none;
  }
`

export const TitleContainer = styled.div.attrs({
  className: "flex items-center justify-center flex-column white"
})`
  grid-column: 1;
  grid-row: 1;
`

export const Link = styled.a.attrs({
  className: "link white"
})`
  :focus {
    outline: none;
  }
`