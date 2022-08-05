import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${props => props.theme.white};
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  html {
    background-color: ${props => props.theme.white};
    
  }
  
  body {
    background-color: ${props => props.theme.dark};
    width: 350px;
    height: 600px;
    overflow: hidden;
    position: relative;
  }

  #root {
    height: 100%;
  }

  body, input, textarea, button {
    font: 500 1rem Montserrat, sans-serif;
  }

  input {
    border: none;
    background-color: transparent;

    &:focus {
      outline: none;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    font-family: Montserrat, sans-serif;
    color: ${props => props.theme.white};
  }

  h1 {
    font-size: 1.8rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
  }
`;
