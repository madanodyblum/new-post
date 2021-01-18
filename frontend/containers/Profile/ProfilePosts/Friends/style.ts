import styled from "styled-components";
import { IColor } from "@Components/data/baseStyles";
import { Button } from "@Components/shareable/ButtonsStyles";

export const Root = styled.div`
background-color: ${IColor.white};
border: 1px solid ${IColor.borderColor};
border-radius: 10px;
`;

export const TitleBar = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px 10px 10px 10px;
`;

export const Title = styled.h5`
margin-bottom: 0;
font-size: 16px;
color: ${IColor.textDark};
`;

export const BlueButton = styled(Button)`
color: ${IColor.blue} !important;

&:hover {
  opacity: 0.7;
}
`;

export const Container = styled.div`
margin-bottom: 0;
padding: 15px 10px;
`;