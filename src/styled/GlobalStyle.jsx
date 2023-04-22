import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  button {
    width: 120px;
    height: 40px;
    border: none;
    border-radius: 10px;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    color: white;
    background-color: transparent;
  }
`;

export default GlobalStyle;