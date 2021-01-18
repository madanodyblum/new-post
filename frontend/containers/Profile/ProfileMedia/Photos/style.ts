import styled from "styled-components";
import { Button } from "@Components/shareable/ButtonsStyles";

export const Root = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const PhotoContainer = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  position: relative;
  margin-bottom: 12px;
  padding: 0 6px;
`;

export const Photo = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 8px;
`;

export const EditButton = styled(Button)`
  position: absolute;
  right: 12px;
  top: 5px;
  background-color: rgba(0, 0, 0, 0.2);
  color: #ffffff;
  padding: 0;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
