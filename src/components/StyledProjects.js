import styled from 'styled-components'

export const Aside = styled.aside.attrs({
  className: "black w-100 w-50-ns center"
})`
  display: grid;
`

export const Figure = styled.figure.attrs({
  className: ""
})`
  grid-column: 1;
  grid-row: 1;
`

export const Image = styled.img.attrs({
  className: "w-100"
})``

export const Counter = styled.p.attrs({
  className: ""
})`
  grid-column: 1;
  grid-row: 1;  
`

export const ArrowContainer = styled.div.attrs({
  className: "flex flex items-center justify-between"
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