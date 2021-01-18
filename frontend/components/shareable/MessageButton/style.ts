import styled from "styled-components";
import { IColor } from "@Components/data/baseStyles";

export const Root = styled.div`
  position: fixed;
  right: 0;
  bottom: 20px;
  width: 80px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1800;
`;

export const IconButton = styled.button`
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 12px 28px rgba(0, 0, 0, 0.2);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  cursor: pointer;

  .mdi {
    font-size: 24px;
    color: ${IColor.textGray};
  }
`;

export const Badge = styled.div`
  position: absolute;
  right: 10px;
  top: -10px;
  background-color: #2680eb;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
`;