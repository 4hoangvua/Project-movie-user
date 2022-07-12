import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 16px;
        font-family: 'Encode Sans Expanded',sans-serif;
    }
`;
export const theme = {
  c: {
    primary: "#63637A",
    secondary: "#d6413a",
  },
};
export default GlobalStyles;
