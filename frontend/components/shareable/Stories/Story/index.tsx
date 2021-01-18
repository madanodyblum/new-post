import React from "react";
import { Root, AvatarAnimation, Title, Avatar } from "./style";

type Props = {
  avatar: string;
  title: string;
};

const Story: React.FC<Props> = (props) => {
  const { avatar, title } = props;

  return (
    <Root>
      <AvatarAnimation>
        <Avatar src={avatar} alt="" />
      </AvatarAnimation>
      <Title>{title}</Title>
    </Root>
  );
};

export default Story;
