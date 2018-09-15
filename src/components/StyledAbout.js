import styled from 'styled-components'

export const Section = styled.section.attrs({
  className: "mt5 ma0-ns flex justify-center flex-column items-center content-center h-100"
})``

export const Article = styled.article.attrs({
  className: "black flex flex-wrap"
})`
  max-width: 800px;
`

export const Figure = styled.figure.attrs({
  className: "ma0 w-100 w-auto-ns flex justify-center"
})``

export const Image = styled.img.attrs({
  className: "br3"
})``
export const Main = styled.main.attrs({
  className: "ml3-ns"
})`
  max-width: 500px;
`

export const Title = styled.h2.attrs({
  className: "mt3 mt0-ns tc"
})``

export const Content = styled.main.attrs({
  className: "pa2 pa0-ns"
})``

export const Footer = styled.details.attrs({
  className: "w-100"
})``

export const Summary = styled.summary.attrs({
  className: "w3 pointer"
})`
  :focus {
    outline: none;
    }
`

export const Skills = styled.p.attrs({
  className: "f2 mb0 tc"
})``