import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeTemplates from "./Templates";
import Layout from "./Page/Login/Layout";
import LoginHead from "./Page/Login/LoginHead";
import LoginForm from "./Page/Login/LoginForm";
import Detail from "./Page/DetailPage";
import Ticket from "./Page/Ticket";
import Login from "./Page/Login1";
import Register from "./Page/register";
import ModalAccount from "./components/modals/ModalAccount";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeTemplates />} />
        {/* <Route
          path="signin"
          element={
            <Layout>
              <LoginHead />
              <LoginForm />
            </Layout>
          }
        /> */}
        <Route path="/signin" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="detail/:maPhim" element={<Detail />}></Route>
        <Route path="ticket/:id" element={<Ticket />} />
        <Route path="history/:taiKhoan" element={<ModalAccount />} />
      </Routes>
      <GlobalStyles />
    </Router>
  );
}

export default App;
