import styled from "styled-components";

export const ButtonChair = styled.span`
  font-size: 1rem;
  cursor: pointer;
  padding-top: 0.625rem;
  text-align: center;
  margin: 5px;
  width: 2.5rem;
  height: 2.5rem;
  background: ${(props) =>
    props.active ? "green" : props.typeChair === "Thuong" ? "red" : "yellow"};
  ${(props) =>
    props.checkChair
      ? `
  background-color: rgba(0, 0, 0, 0.5);
  pointer-events: none;
      &:after {
    content: "X";
  }
  ${Chair} { display: none}
  `
      : ""}
`;
export const Chair = styled.span`
  font-size: 1rem;
`;
export const ContainerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: left;
`;
export const Info = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  justify-content: center;
  align-items: center;
`;
export const ContainerInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3.125rem;
`;
