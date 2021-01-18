import { IColor } from "@Components/data/baseStyles";
import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const Label = styled.div`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 400;
  color: ${IColor.textGray};
`;

const Checkbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 18px;
  height: 18px;
  background-color: ${({ checked }) => (checked ? "#2196f3" : "#eee")};

  ${({ checked }) => {
    if (!checked) {
      return `
        &:hover {
            background-color: #ccc;
        }`;
    }
  }}
`;

const CheckIcon = styled.span`
  content: "";
  position: absolute;
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
`;

type Props = {
  checked: boolean;
  label?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
};

const CheckBox: React.FC<Props> = (props: Props) => {
  const { label, checked, style, onClick, className } = props;

  return (
    <Root className={className} style={style} onClick={onClick}>
      <Checkbox checked={checked}>{checked && <CheckIcon />}</Checkbox>
      <Label>{label}</Label>
    </Root>
  );
};

export default CheckBox;
