import styled from "styled-components";

export const ButtonChair = styled.span`
  width: 2.5rem;
  height: 2.5rem;
  color: #fff;
  border-radius: 5px;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;

  cursor: pointer;
  font-size: 1rem;
  padding-top: 0.625rem;
  text-align: center;
  margin: 5px;

  ${(props) =>
    props.active
      ? `
      background-color: #4dccc6;
background-image: linear-gradient(315deg, #4dccc6 0%, #96e4df 74%);
  line-height: 42px;
  padding: 0;
  border: none;
  &:hover {
    background-color: #89d8d3;
background-image: linear-gradient(315deg, #89d8d3 0%, #03c8a8 74%);
   }
      `
      : props.typeChair === "Thuong"
      ? `
      color:#000;
         border: none;
        &:after {
        height: 100%;
        direction: rtl;
        z-index: -1;
        transition: all 0.3s ease;
        }
        &:hover:after {
          left: auto;
        right: 0;
        width: 100%;
        &:active {
          top: 2px;
        }
        }
        
        `
      : `
       background: rgb(255,151,0);
  border: none;
  z-index: 1;
  &:after {
  width: 100%;
  z-index: -1;
  border-radius: 5px;
  transition: all 0.3s ease;
  }
  &:hover {
    color: #000;
  }
  &:hover:after {
    top: auto;
  bottom: 0;
  height: 100%;
  }
  &:active{
    top: 2px;
  }
      `};
  ${(props) =>
    props.checkChair
      ? `
      color:#fff;
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
