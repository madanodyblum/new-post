import styled from "styled-components";

export const Root = styled.div`
  background-color: ${({ active }) => (active ? "#FFFFFF" : "transparent")};
  border: none;
  border-radius: 50px 0 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ active }) => (active ? "#2680EB" : "#A6A6A6")};
  padding: 15px 0;
  cursor: pointer;

  &:hover {
    color: #2680EB;
  }
`;

export const Icon = styled.i`
  font-size: 24px;
`;
