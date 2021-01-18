import { IColor } from "@Components/data/baseStyles";
import styled from "styled-components";

export const Follow = styled.button`
  border-width: 0;
  border-radius: 50px;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 500;

  background-color: ${IColor.blue};
  color: ${IColor.white};

  cursor: pointer;

  &:hover {
    color: ${IColor.textGray};
  }
`;

export const UnFollow = styled.button`
  border-width: 0;
  border-radius: 50px;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 500;

  background-color: ${IColor.background};
  color: ${IColor.textGray};

  cursor: pointer;

  &:hover {
    background-color: #e8e8e8;
    color: ${IColor.textGray};
  }
`;
