import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeTemplates from "./Templates";
import Layout from "./Page/Login/Layout";
import LoginHead from "./Page/Login/LoginHead";
import LoginForm from "./Page/Login/LoginForm";
import Detail from "./Page/DetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeTemplates />} />
        <Route
          path="signin"
          element={
            <Layout>
              <LoginHead />
              <LoginForm />
            </Layout>
          }
        />
        <Route path="detail/:maPhim" element={<Detail />}></Route>
      </Routes>
      <GlobalStyles />
    </Router>
  );
}

export default App;
