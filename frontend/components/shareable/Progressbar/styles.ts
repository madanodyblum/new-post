import { IProgress } from "@Components/data/styles";
import styled from "styled-components";

export const ProgressbarStyle = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 0;
  overflow: hidden;
  right: 0;
  bottom: 0;
  z-index: -1;
  span {
    opacity: 0.4;
    display: flex;
    height: 85%;
    position: absolute;
    right: 3px;
    bottom: 2px;
    width: ${({ width }: IProgress) => width}%;

    background-color: ${({ color }: IProgress) => color};
    border-radius: 4px;
  }
`;
