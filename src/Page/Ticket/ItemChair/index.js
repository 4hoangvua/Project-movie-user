import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { clickChair } from "../../../reducers/ticket";
import { ButtonChair, Chair } from "./ItemChairElement";
const ItemChair = ({ ticket }) => {
  const [isSelected, setIsSelected] = useState(false);
  const dispatch = useDispatch();
  const handleActive = () => {
    dispatch(clickChair({ ...ticket, selected: !isSelected }));
    setIsSelected(!isSelected);
  };

  return (
    <>
      <ButtonChair
        typeChair={ticket.loaiGhe}
        checkChair={ticket.daDat}
        active={isSelected}
        onClick={() => handleActive()}
      >
        <Chair>{ticket.stt}</Chair>
      </ButtonChair>
    </>
  );
};

export default ItemChair;
