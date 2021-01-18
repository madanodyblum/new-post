import React from "react";
import Story from "./Story";
import { Root, Card, LeftArrow, RightArrow, StoryContainer } from "./style";

const stories = [
  {
    avatar: "images/user-img/user-img-2.png",
    title: "User name123123",
  },
  {
    avatar: "images/user-img/user-img-3.png",
    title: "User name",
  },
  {
    avatar: "images/user-img/user-img-4.png",
    title: "User name",
  },
  {
    avatar: "images/user-img/user-img-5.png",
    title: "User name",
  },
  {
    avatar: "images/user-img/user-img-6.png",
    title: "User name",
  },
  {
    avatar: "images/user-img/user-img-7.png",
    title: "User name",
  },
];

const Stories = () => {
  return (
    <Root>
      <div className="feeds-title">
        <h2 className="title blue">
          Stories
          <i className="mdi mdi-play-speed" />
        </h2>
      </div>
      <Card>
        <LeftArrow>
          <i className="mdi mdi-chevron-left" />
        </LeftArrow>
        <RightArrow>
          <i className="mdi mdi-chevron-right" />
        </RightArrow>
        <StoryContainer>
          {stories?.map((story, index) => {
            return (
              <div style={{ margin: "0 8px" }} key={index}>
                <Story avatar={story.avatar} title={story.title} />
              </div>
            );
          })}
        </StoryContainer>
      </Card>
    </Root>
  );
};

export default Stories;
