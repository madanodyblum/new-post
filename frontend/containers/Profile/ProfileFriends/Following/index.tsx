import { Follow, UnFollow } from "@Components/shareable/common";
import EmptyAvatar from "@Components/shareable/EmptyAvatar";
import React from "react";
import {
  Root,
  ListItem,
  Left,
  Avatar,
  NameContent,
  Name,
  Bio,
  Right,
} from "./style";

const Mock_follow = [
  {
    avatar: "images/user-img/user-img-10.png",
    name: "Jeffery Diaz",
    type: "User Bio",
    isFollowing: true,
  },
  {
    avatar: "images/user-img/user-img-9.png",
    name: "Linnie Weber",
    type: "User Bio",
    isFollowing: false,
  },
  {
    name: "Linnie Weber",
    type: "User Bio",
    isFollowing: false,
  },
];

const FollowingList = () => {
  return (
    <Root>
      {Mock_follow?.map(({ avatar, name, type, isFollowing }, index) => {
        return (
          <ListItem key={index}>
            <Left>
              {avatar ? <Avatar src={avatar} alt="" /> : <EmptyAvatar />}
              <NameContent>
                <Name>{name}</Name>
                <Bio>{type}</Bio>
              </NameContent>
            </Left>
            <Right>
              {isFollowing ? (
                <Follow>Follow</Follow>
              ) : (
                <UnFollow>Unfollow</UnFollow>
              )}
            </Right>
          </ListItem>
        );
      })}
    </Root>
  );
};

export default FollowingList;
