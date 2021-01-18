import { IColor } from "@Components/data/baseStyles";
import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;
const Label = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${IColor.textGray};
  margin-left: 8px;
`;

const Radio = styled.div`
  width: 18px;
  height: 18px;
  background: ${({ selected }) => (selected ? IColor.blue : "#eee")};
  border-radius: 50%;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RadioSelected = styled.span`
  position: absolute;
  width: 8px;
  height: 8px;
  background: ${IColor.white};
  border-radius: 50%;
`;

type Props = {
  selected: boolean;
  label?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
};

const RadioButton: React.FC<Props> = (props: Props) => {
  const { label, selected, style, onClick, className } = props;

  return (
    <Root className={className} style={style} onClick={onClick}>
      <Radio selected={selected}>{selected && <RadioSelected />}</Radio>
      <Label>{label}</Label>
    </Root>
  );
};

export default RadioButton;
