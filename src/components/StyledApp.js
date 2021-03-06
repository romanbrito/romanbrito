import styled from 'styled-components'

export const Main = styled.main.attrs({
  className: "main sans-serif white vh-100"
})`
  display: grid;
  grid-template-rows: 3fr 2fr;
   
  .articles {
  display: grid;
  grid-template-rows: 1fr;
  }
`

export const CloseButton = styled.button.attrs({
  className: "pointer bg-white absolute right-0 ma3 b--solid b--black"
})``

export const Footer = styled.footer.attrs({
  className: "bg-light-green"
})``
