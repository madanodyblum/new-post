import React from "react";
import { Root, Icon } from "./style";

type Props = {
  onClick?: (event: React.MouseEvent<Element, MouseEvent>) => void;
  active: boolean;
  title?: string;
  iconClass?: string;
};
const MessengerTab: React.FC<Props> = (props: Props) => {
  const { onClick = () => {}, active = false, title = "", iconClass } = props;
  return (
    <Root onClick={onClick} active={active}>
      {<Icon className={iconClass} active={active} />}
      {!active && <span style={{ marginTop: 5, fontSize: 14 }}>{title}</span>}
    </Root>
  );
};

export default MessengerTab;
