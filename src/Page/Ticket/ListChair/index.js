import React from "react";
import ItemChair from "../ItemChair";
import { ButtonChair, Chair } from "../ItemChair/ItemChairElement";
import { ContainerList, ContainerInfo, Info } from "./ListChairElement";

const ListChair = ({ ticketChair }) => {
  return (
    <>
      <ContainerList>
        {ticketChair.map((ticket, index) => {
          return (
            <ItemChair key={index} ticket={ticket}>
              {(index + 1) % 16 === 0 ? <br /> : ""}
            </ItemChair>
          );
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
