import styled from "styled-components";
import { IColor } from "@Components/data/baseStyles";

export const Root = styled.div`
display: flex;
align-items: center;
cursor: pointer;

&:hover {
  color: ${IColor.blue};
  text-decoration: underline;
}
`;

export const Icon = styled.div`
font-size: 28px;
color: ${IColor.blue};
margin-right: 8px;
`;

export const Label = styled.div`
font-size: 14px;
font-weight: 400;
color: ${IColor.blue};
`;
