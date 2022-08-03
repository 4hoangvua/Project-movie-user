import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ModalLogin from "../modals/ModalLogin";
import { LogoLogout, Name } from "./UserInfoElement";
const UserInfo = ({ userLogin }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <LogoLogout onClick={() => setShowModal(!showModal)} />
      <NavLink
        style={{ textDecoration: "none", color: "unset" }}
        to={`/history/${userLogin.taiKhoan}`}
      >
        <Name>{userLogin.hoTen}</Name>
      </NavLink>
      <ModalLogin
        showModal={showModal}
        setShowModal={setShowModal}
        lognin={false}
      >
        Bạn Muốn đăng xuất !
      </ModalLogin>
    </>
  );
};

export default UserInfo;
