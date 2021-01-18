import React from "react";
import { Root, Icon, Content, Title, SubTitle } from "./style";

type Props = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  title?: string;
  subTitle?: string;
};

const PropertyInfo: React.FC<Props> = (props: Props) => {
  const { children, style, title, subTitle } = props;
  return (
    <Root style={style}>
      <Icon>{children}</Icon>
      <Content>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </Content>
    </Root>
  );
};

export default PropertyInfo;
