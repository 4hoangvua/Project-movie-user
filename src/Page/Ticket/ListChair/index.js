import React from "react";
import ItemChair from "../ItemChair";

import {
  ButtonChair,
  ContainerList,
  Chair,
  ContainerInfo,
  Info,
} from "./ListChairElement";
const ListChair = ({ ticketChair }) => {
  return (
    <>
      <ContainerList>
        {ticketChair.map((ticket, index) => {
          return <ItemChair key={index} ticket={ticket} />;
        })}
      </ContainerList>
      <ContainerInfo>
        <Info>
          <ButtonChair checkChair={true} />
          <Chair>Đã đặt</Chair>
        </Info>
        <Info>
          <ButtonChair checkChair={false} typeChair="Thuong" />
          <Chair>Thường</Chair>
        </Info>
        <Info>
          <ButtonChair checkChair={false} typeChair="Vip" />
          <Chair>Vip</Chair>
        </Info>
      </ContainerInfo>
    </>
  );
};

export default ListChair;
