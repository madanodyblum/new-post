import styled from "styled-components";
import { IColor } from "@Components/data/baseStyles";
import { Button } from "@Components/shareable/ButtonsStyles";

export const Root = styled.div``;

export const Form = styled.div`
  padding: 12px 0;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid ${IColor.borderColor};
  border-radius: 5px;
  background-color: ${IColor.white};
  color: ${IColor.textGray};
  font-size: 14px;
  transition: all 0.2s ease;
  &:hover,
  &:focus {
    border-color: ${IColor.blue};
    transition: all 0.2s ease;
  }
  height: 42px;
  padding: 0 15px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid ${IColor.borderColor};
  border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
  color: ${IColor.textGray};

  &:hover,
  &:focus {
    border-color: ${IColor.blue};
    transition: all 0.2s ease;
  }

  padding: 15px;
`;

export const SaveForm = styled.div`
  padding: 10px 0 20px 0;
  border-top: 1px solid ${IColor.borderColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FormButton = styled(Button)`
  padding: 0.6rem 1rem !important;
  border-radius: 8px;
  color: ${IColor.textGray};
  font-size: 14px;
  font-weight: 500;

  ${({ circle }) => {
    if (circle)
      return `
      width: 40px;
      height: 40px;
      border-radius: 50%;
      padding: 0 !important;
      i {
        font-size: 24px !important;
      }
    `;
  }}

  &:hover {
    background-color: #d5d8e0 !important;
  }

  ${({ isDefault }) => {
    if (isDefault) {
      return `
      color: ${IColor.white};
      background-color: ${IColor.blue};
      &:hover {
        background-color: #1573e3 !important;
      }
     `;
    }
  }}
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
