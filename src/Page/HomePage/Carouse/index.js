import React, { useState } from "react";
import { useSelector } from "react-redux";
import ModelVideo from "../../../components/modals/ModalVideo";
import {
  ContainerArrow,
  ArrowLeft,
  ArrowRight,
  ContainerCarouse,
  CardImg,
  ArrowPlay,
  ContainerModal,
  Image,
} from "./CarouseElement";
const Carouse = ({ theme }) => {
  const { bannerImage } = useSelector((state) => state.ban);
  const [current, setCurrent] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const length = bannerImage.length;
  if (length === 0) return;

  const nextSlide = () => {
    setCurrent(current === length ? 1 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 1 ? length : current - 1);
  };
  return (
    <>
      <ContainerCarouse>
        {bannerImage.map((slide, index) => {
          return (
            <ContainerModal key={index}>
              <>
                <CardImg active={index + 1 === current ? true : false}>
                  {index + 1 === current && (
                    <Image linkImage={slide.hinhAnh} descImage={slide.maPhim} />
                  )}
                </CardImg>
                {index + 1 === current && (
                  <ModelVideo
                    showModal={showModal}
                    trailer={slide.trailer}
                    setShowModal={setShowModal}
                  />
                )}
              </>
            </ContainerModal>
          );
        })}
        {!showModal ? (
          <ContainerArrow>
            <ArrowLeft onClick={prevSlide} />
            <ArrowPlay onClick={() => setShowModal(true)} />
            <ArrowRight onClick={nextSlide} />
          </ContainerArrow>
        ) : null}
      </ContainerCarouse>
    </>
  );
};

export default Carouse;
