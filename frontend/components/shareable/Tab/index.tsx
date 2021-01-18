import React from "react";
import { Root } from "./style";

type Props = {
  selected?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const Tab: React.FC<Props> = (props: Props) => {
  const { selected = false, onClick = () => {}, children, style } = props;
  return (
    <Root selected={selected} onClick={onClick} style={style}>
      {children}
    </Root>
  );
};

export default Tab;
