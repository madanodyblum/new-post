import styled from "styled-components";
import { IColor } from "@Components/data/baseStyles";

export const Root = styled.div`
display: flex;
align-items: center;
`;

export const Icon = styled.div`
font-size: 28px;
color: ${IColor.textLight};
margin-right: 8px;
`;

export const Content = styled.div``;

export const Title = styled.h6`
  font-size: 14px;
  overflow: hidden;
  margin-bottom: 0px;
`;

export const SubTitle = styled.span`
  font-size: 13px;
  font-weight: 400;
  color: ${IColor.textGray};
  overflow: hidden;
`;
