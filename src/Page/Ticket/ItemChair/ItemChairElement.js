import styled from "styled-components";

export const ButtonChair = styled.span`
  cursor: pointer;
  font-size: 1rem;
  padding-top: 0.625rem;
  text-align: center;
  margin: 5px;
  width: 2.5rem;
  height: 2.5rem;
  opacity: 0.8;
  transition: 0.3s ease;
  box-shadow: rgba(25, 25, 25, 0.04) 0 0 1px 0, rgba(0, 0, 0, 0.1) 0 3px 4px 0;
  &:hover {
    opacity: 1;
    transform: scale(1.07);
  }
  background: ${(props) =>
    props.active ? "green" : props.typeChair === "Thuong" ? "red" : "yellow"};
  ${(props) =>
    props.checkChair
      ? `
  background-color: rgba(0, 0, 0, 0.5);
  pointer-events: none;
      &:after {
    content: "X";
    font-size: 1rem;
  }
  ${Chair} { display: none}
  `
      : ""}
`;
export const Chair = styled.span`
  font-size: 1rem;
`;
