import React from "react";
import { useDispatch } from "react-redux";
import { deleteUserLoginAdmin } from "../../../reducers/singin";
import {
  ReactCheck,
  CModalCheck,
  ButtonCheck,
  Title,
  ButtonLogin,
  Background,
  CloseModalButton,
} from "./ModalLoginElement";
const ModalLogin = ({ children, showModal, setShowModal, lognin }) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    setShowModal(!showModal);
  };
  const handleDeleteLocalStore = () => {
    dispatch(deleteUserLoginAdmin());
    setShowModal(!showModal);
  };
  return (
    <>
      {showModal ? (
        <Background>
          <CModalCheck>
            <CloseModalButton onClick={handleClose} />
            <ReactCheck>
              <Title>{children}</Title>
              {lognin ? (
                <ButtonLogin to="/signin">Đồng ý</ButtonLogin>
              ) : (
                <>
                  <ButtonCheck onClick={handleDeleteLocalStore}>
                    Đồng ý
                  </ButtonCheck>
                </>
              )}
            </ReactCheck>
          </CModalCheck>
        </Background>
      ) : null}
    </>
  );
};

export default ModalLogin;
