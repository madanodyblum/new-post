import { IColor } from "@Components/data/baseStyles";
import styled from "styled-components";

export const Root = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ selected }) => (selected ? IColor.blue : IColor.textGray)};
  padding: 20px;
  cursor: pointer;

  ${({ selected }) => {
    if (selected) {
      return `border-bottom: 3px solid ${IColor.blue};`;
    }
  }}
`;
