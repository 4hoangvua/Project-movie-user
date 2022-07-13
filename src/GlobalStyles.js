import { createGlobalStyle } from "styled-components";

export const theme = {
  c: {
    primary: "#63637A",
    secondary: "#d6413a",
    start: "#F9D729",
  },
  bg: {
    primary: "#EEF8FF",
  },
};
const GlobalStyles = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 16px;
        font-family: 'Encode Sans Expanded',sans-serif;
        background: ${theme.bg.primary}

    }
`;
export default GlobalStyles;
