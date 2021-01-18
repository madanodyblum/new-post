import styled, { keyframes } from "styled-components";
import { IColor } from "@Components/data/baseStyles";

const animateScale = keyframes`
    from {
      transform: scale(0.9);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
`;

export const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding-bottom: calc(60px + 16px);
  padding-top: calc(60px + 16px);
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 2000;
`;

export const BackDrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: -1;
`;

export const DialogComponent = styled.div`
  position: relative;
  background-color: ${IColor.white};
  border-radius: 10px;
  width: 500px;
  box-shadow: 0 12px 28px 0 ${IColor.shadow2}, 0 2px 4px 0 ${IColor.shadow1},
    inset 0 0 0 1px ${IColor.shadowInset};
  animation: ${animateScale} 0.4s;
`;
