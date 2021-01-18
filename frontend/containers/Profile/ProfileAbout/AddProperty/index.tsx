import React from "react";
import { Root, Icon, Label } from "./style";

type Props = {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
};

const AddProperty: React.FC<Props> = (props: Props) => {
  const { children, onClick, style } = props;
  return (
    <Root onClick={onClick} style={style}>
      <Icon>
        <i className="mdi mdi-plus-circle-outline" />
      </Icon>
      <Label>{children}</Label>
    </Root>
  );
};

export default AddProperty;
