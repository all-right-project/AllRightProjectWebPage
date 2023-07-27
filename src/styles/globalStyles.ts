import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-family: var(--font-inter);
  }
  body{
    margin:0
  }
  a {
    color: #333;
    text-decoration: none;
  }
  ul {
    padding: 0;
    margin: 0;
    li {
      list-style: none;
    }
  }
  dl {
    margin: 0;
    dd {
      margin: 0;
    }
  }
  h1,h2,h3,h4,h5,h6{
    margin: 0
  }
`

export default GlobalStyle
