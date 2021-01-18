import React from "react";
import { Root, DialogComponent, BackDrop } from "./style";

type Props = {
  open: boolean;
  onClose: () => void;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

const Dialog: React.FC<Props> = (props: Props) => {
  const { onClose, children, style } = props;

  return (
    <Root {...{ style }}>
      <DialogComponent>{children}</DialogComponent>
      <BackDrop onClick={onClose} />
    </Root>
  );
};

export default Dialog;
