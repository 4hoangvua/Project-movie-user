import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeTemplates from "./Templates";
import Login from "./Page/Login";
import Detail from "./Page/DetailPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeTemplates />} />
        <Route path="singin" element={<Login />} />
        <Route path="detail" element={<Detail />}></Route>
      </Routes>
      <GlobalStyles />
    </Router>
  );
}

export default App;
