import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeTemplates from "./Templates";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeTemplates />} />
        {/* <Route path="/signin" element={<SiginPage />} /> */}
      </Routes>
      <GlobalStyles />
    </Router>
  );
}

export default App;
