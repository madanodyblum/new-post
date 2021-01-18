
import { IColor } from "@Components/data/baseStyles";
import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  widht: 100%;
  height: 2px;
`;

export const Line = styled.div`
  position: relative;
  background-color: #727272;
  height: 2px;
  width: 100%;
  margin: 0 2px;
  border-radius: 10px;

  .seek-filter {
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${IColor.white};
    height: 2px;
    border-radius: 10px;
    width: ${({ percent }) => `${percent}%`};
  }
`;
