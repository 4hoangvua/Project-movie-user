import { Outlet } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { theme } from "../GlobalStyles";
import HomePage from "../Page/HomePage";
import Footer from "../Page/HomePage/Footer";
const HomeTemplates = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
      <Footer />
      <Outlet />
    </ThemeProvider>
  );
};

export default HomeTemplates;
