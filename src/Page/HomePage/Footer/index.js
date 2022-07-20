import React from "react";
import { useSelector } from "react-redux";
import {
  ContainerFooter,
  ContainerLogo,
  Row,
  Col,
  Item,
  Logo,
  ContainerForMe,
} from "./FooterElement";
const Footer = () => {
  const { listTheaterInfo } = useSelector((state) => state.show);
  return (
    <ContainerFooter id="soon">
      <ContainerLogo>
        <h1>Popular Theater In VietNam</h1>
        <br />
        <Row>
          {listTheaterInfo.map((list, index) => {
            return (
              <Col key={index}>
                <Item>
                  <Logo LinkImage={list.logo} nameImage={list.tenHeThong} />
                </Item>
              </Col>
            );
          })}
        </Row>
      </ContainerLogo>
      <br />
      <ContainerForMe>@All Aladin</ContainerForMe>
    </ContainerFooter>
  );
};

export default Footer;
