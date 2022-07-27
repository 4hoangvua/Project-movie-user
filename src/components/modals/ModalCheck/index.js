import React from "react";
import { Background, CloseModalButton } from "../ModalVideo/ModalVideoElement";
import {
  ReactCheck,
  CModalCheck,
  ButtonCheck,
  Title,
  ButtonLogin,
} from "./ModalCheckElement";

const ModalCheck = ({ children, showModal, setShowModal, lognin }) => {
  const handleClose = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      {showModal ? (
        <Background onClick={handleClose}>
          <CModalCheck>
            <CloseModalButton onClick={handleClose} />
            <ReactCheck>
              <Title>{children}</Title>
              {lognin ? (
                <ButtonLogin to="/signin">Đồng ý</ButtonLogin>
              ) : (
                <>
                  <ButtonCheck onClick={handleClose}>Đã hiểu</ButtonCheck>
                </>
              )}
            </ReactCheck>
          </CModalCheck>
        </Background>
      ) : null}
    </>
  );
};

export default ModalCheck;
