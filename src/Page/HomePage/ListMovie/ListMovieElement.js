import styled from "styled-components";

export const RowMovie = styled.div`
  margin-top: 6.25rem;
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
`;
export const NextListMovie = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NextList = styled.button`
  padding: 0 15px;
  display: block;
  border: 1px solid ${({ theme }) => theme.c.secondary};
  margin-right: 15px;
  opacity: 0.8;
  transition: 0.3 ease;
  &:hover {
    opacity: 1;
  }
`;
