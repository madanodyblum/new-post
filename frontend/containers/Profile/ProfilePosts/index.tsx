import ListViewContainer from "@Components/shareable/Posts/ListsPosts/ListContainer";
import React from "react";
import FriendsCard from "./Friends";
import { Root, LeftSticky, MainContainer } from "./style";

const ProfilePosts = () => {
  return (
    <Root>
      <LeftSticky>
        <FriendsCard />
      </LeftSticky>
      <MainContainer>
        <ListViewContainer
          header={{
            userInfo: {
              fullname: "LXSX",
              avatar: "images/user-img/user-img-1.png",
              _id: "id",
              profile: "profile",
            },
            createdAt: new Date(),
            menuList: [
              {
                title: "Report",
                url: "url1",
              },
              {
                title: "Send Comment",
                url: "url2",
              },
              {
                title: "Share",
                url: "url3",
              },
            ],
          }}
          posts={[
            {
              _id: "id",
              tags: [
                {
                  title: "angry",
                  img: "img",
                  url: "url",
                  _id: "id1",
                },
                {
                  title: "mountain",
                  img: "img",
                  url: "url",
                  _id: "id2",
                },
                {
                  title: "lxsx",
                  img: "img",
                  url: "url",
                  _id: "id3",
                },
              ],
              countComments: 1,
              content:
                "orem ipsum dolor sit amet consectetur adipisicing elit. Eius doloremque consequuntur quae expedita. Doloremque nobis est veniam praesentium, rem at illum! Eum, nam provident! Praesentium dignissimos voluptates saepe quas ea.",
              // htmlContent: "htmlContent",
              linkData: {
                img: "img",
                url: "url",
              },
            },
          ]}
        />
      </MainContainer>
    </Root>
  );
};

export default ProfilePosts;
