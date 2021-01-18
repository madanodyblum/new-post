import SeekBar from "@Components/shareable/SeekBar";
import React, { useState } from "react";
import {
  Root,
  Blur,
  Content,
  Header,
  UserInfo,
  UserName,
  StoryMenu,
  MenuButton,
  StoryBody,
  CloseButton,
  Preview,
  LinkContent,
  LinkButton,
  DropButton,
  LinkUrl,
  PrevButton,
  NextButton,
} from "./style";

const PreviewStory = () => {
  const [isShownLink, setShowLink] = useState(false);

  return (
    <Root>
      <Blur>
        <img src="images/bg/01.jpg" alt="short-story" />
        <div className="overlay" />
      </Blur>
      <Content>
        <Header>
          <div style={{ flexGrow: 1 }}>
            <a href="#">
              <UserInfo>
                <img src="images/user-img/user-img-9.png" alt="user-image" />
                <UserName>
                  <h6>LXSX619</h6>
                  <span>1h</span>
                </UserName>
              </UserInfo>
            </a>
          </div>
          <StoryMenu>
            <MenuButton>
              <i className="mdi mdi-pause" />
            </MenuButton>
            <MenuButton>
              <i className="mdi mdi-volume-high" />
            </MenuButton>
            <MenuButton>
              <i className="mdi mdi-dots-horizontal" />
            </MenuButton>
          </StoryMenu>
        </Header>
        <div style={{ padding: "10px 0" }}>
          <SeekBar percent={48} />
        </div>
        <StoryBody>
          <CloseButton>
            <i className="mdi mdi-close" />
          </CloseButton>
          <Preview>
            <img src="images/bg/01.jpg" alt="preview" />
            <LinkContent>
              <LinkButton>
                <DropButton
                  className="btn-link"
                  onClick={() => {
                    setShowLink(!isShownLink);
                  }}
                >
                  {!isShownLink ? (
                    <i className="mdi mdi-arrow-up-drop-circle" />
                  ) : (
                    <i className="mdi mdi-arrow-down-drop-circle" />
                  )}
                </DropButton>
                <span>See Link</span>
              </LinkButton>
              {isShownLink && (
                <LinkUrl>
                  <a href="#">
                    https://www.youtube.com/watch?v=fa_VyU2LPn0&amp;list=RDfa_VyU2LPn0&amp;start_radio=1
                  </a>
                </LinkUrl>
              )}
            </LinkContent>
          </Preview>
          <PrevButton>
            <i className="mdi mdi-chevron-left" />
            
          </PrevButton>
          <NextButton>
            <i className="mdi mdi-chevron-right" />
          </NextButton>
        </StoryBody>
      </Content>
    </Root>
  );
};

export default PreviewStory;
