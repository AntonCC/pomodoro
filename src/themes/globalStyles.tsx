import { createGlobalStyle, GlobalStyleComponent } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    font-size: 10px
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  body {
  margin: 0;
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  h1 {
    font-size: 10rem;
    line-height: 12rem;
    letter-spacing: -5px;
  }

  h2 {
    font-size: 2.8rem;
    line-height: 3.4rem;
  }

  h3 {
    font-size: 1.6rem;
    line-height: 1.9rem;
    letter-spacing: 15px;
    text-transform: uppercase;
  }

  h4 {
    font-size: 1.3rem;
    line-height: 1.6rem;
    letter-spacing: 5px;
    text-transform: uppercase;
  }

  p {
    font-size: 1.4rem;
    line-height: 1.8rem;
    font-weight: bold;
    &.style-one {
      color: blue;
    }
    &.style-two {
      color: pink;
    }
  }
`

export default GlobalStyle