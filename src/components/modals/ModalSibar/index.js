import React from "react";
import Sidebar from "../../Sidebar";
import { BackgroundSibar, ModalSidebarWrapper } from "./ModalSibarElement";
const ModalSibar = ({ showModal, setShowModal }) => {
  const handleClose = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      {showModal ? (
        <BackgroundSibar onClick={handleClose}>
          <ModalSidebarWrapper>
            <Sidebar />
          </ModalSidebarWrapper>
        </BackgroundSibar>
      ) : null}
    </>
  );
};

export default ModalSibar;
