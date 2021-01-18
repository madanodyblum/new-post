import styled from "styled-components";
import { IColor } from "@Components/data/baseStyles";

export const Root = styled.div`
  margin-bottom: 60px;
  padding: 15px;
  width: 100%;
  background-color: ${IColor.white};
  border-radius: 10px;
  border: 1px solid ${IColor.borderColor};
  display: grid;
  grid-template-columns: 30% 70%;
  column-gap: 15px;
`;

export const AboutTab = styled.div``;

export const AboutTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${IColor.textDark};
  margin-bottom: 10px;
`;

export const List = styled.div``;

export const ListItem = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${IColor.textGray};
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgba(38, 128, 235, 0.1);
  }

  ${({ selected }) => {
    if (selected) {
      return `background-color: rgba(38,128,235,0.1);
          color: ${IColor.blue};
          `;
    }
  }}
`;

export const AboutContent = styled.div`
  border-left: 1px solid ${IColor.borderColor};
  padding: 0 15px;
`;
