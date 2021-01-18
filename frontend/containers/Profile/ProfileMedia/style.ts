import styled from "styled-components";
import { IColor } from "@Components/data/baseStyles";

export const Root = styled.div`
  margin-bottom: 60px;
  background-color: ${IColor.white};
  border-radius: 10px;
  border: 1px solid ${IColor.borderColor};
  padding: 15px;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${IColor.textDark};
  margin-bottom: 10px;
`;

export const TabBar = styled.div`
  display: flex;
  margin-bottom: 10px;
  border-bottom: 1px solid ${IColor.borderColor};
`;

export const Body = styled.div`
  padding-top: 10px;
`;
