import styled from "styled-components";
import { IColor } from "@Components/data/baseStyles";

export const Root = styled.div`
`;

export const ListItem = styled.div`
  padding: 5px;
  border-radius: 5px;
  display: flex;
  align-items: center;

  cursor: pointer;

  &:hover {
    background-color: rgba(38, 128, 235, 0.1);
  }
`;

export const Left = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 40px;
  border-radius: 50%;
`;

export const NameContent = styled.div`
  margin-left: 10px;
`;

export const Name = styled.h6`
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 600;
  color: ${IColor.textDark};
  overflow: hidden;
`;

export const Bio = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${IColor.textGray};
  overflow: hidden;
`;

export const Right = styled.div``;
