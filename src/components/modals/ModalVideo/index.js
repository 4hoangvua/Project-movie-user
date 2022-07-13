import React from "react";
import ReactPlayer from "react-player";
import {
  Background,
  ModalWrapper,
  CloseModalButton,
} from "./ModalVideoElement";
const ModelVideo = ({ showModal, trailer, setShowModal, theme }) => {
  const handleClose = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      {showModal ? (
        <Background onClick={handleClose}>
          <ModalWrapper>
            <CloseModalButton onClick={handleClose} />
            <ReactPlayer
              playing={true}
              muted={true}
              controls
              width="100%"
              height="100%"
              url={trailer}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default ModelVideo;
