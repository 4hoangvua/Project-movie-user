import { createGlobalStyle } from "styled-components";
import { device } from "./common/device";
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
    html{
      @media ${device.laptopL}{
        font-size: 1rem;
      } 
      @media ${device.laptop}{
        font-size: 0.875rem;
      } 
      @media ${device.tablet}{
        font-size: 0.625rem;
      } 
      @media ${device.mobileL}{
        font-size: 0.5rem;
      } 

    }
`;
export default GlobalStyles;
