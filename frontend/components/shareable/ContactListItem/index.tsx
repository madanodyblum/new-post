import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  color: #474747;
  cursor: pointer;

  &:hover {
    color: #2680eb;
    background-color: #f5f5f5;
  }
`;

const Left = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
`;

const Avatar = styled.img`
  width: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Name = styled.span`
  font-size: 14px;
  font-weight: 500;
`;
const Right = styled.div``;

const Badge = styled.div`
  background-color: #2680eb;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  color: #ffffff;
  font-size: 12px;
`;

type Props = {
  avatar?: string;
  name: string;
  badge?: string;
};

const ContactListItem: React.FC<Props> = (props: Props) => {
  const { avatar = "", name, badge } = props;
  return (
    <Root>
      <Left>
        <Avatar src={avatar} alt="" />
        <Name>{name}</Name>
      </Left>
      <Right>{badge && <Badge>{badge}</Badge>}</Right>
    </Root>
  );
};

export default ContactListItem;
