import styled from 'styled-components'

export const Header = styled.header.attrs({
  className: "bg-center flex h-100 flex-column justify-center items-center"
})`
  background-image: url("https://res.cloudinary.com/spottermart/image/upload/c_scale,w_1920/v1536360287/BGromanbrito_e7rvch.jpg");
`

export const MainTitle = styled.h1.attrs({
  className: "f1 tc"
})``

export const SubTitle = styled.h2.attrs({
  className: "f3 tc"
})``

export const Social = styled.h2.attrs({
  className: "f1"
})``

export const Link = styled.a.attrs({
  className: "white pointer"
})``

export const Modal = styled.figure.attrs({
  className: "modal dn ma0 aspect-ratio--object bg-black-70"
})``

// "modal ma0 absolute absolute--fill bg-black-70 w-100 h-100 dn"

export const ModalContent = styled.article.attrs({
  className: "tc center w-100 h-100"
})``

export const CloseModalBtn = styled.button.attrs({
  className: "pointer bg-white absolute right-0 ma5 b--solid b--black"
})``
