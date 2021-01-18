import React from "react";
import { Root, Header, Body, PreviewContainer, Title, PreviewBody, ImagePreview } from "./style";
import { Button } from "@Components/shareable/ButtonsStyles";


const StoryPreview = () => {
  return (
    <Root>
      <Header>
        <Button className="btn-circle">
          <i className="mdi mdi-plus" />
        </Button>
        <Button className="btn-circle" style={{ marginLeft: 15 }}>
          <i className="mdi mdi-menu-down" />
        </Button>
      </Header>
      <Body>
        <PreviewContainer>
          <Title>Preview</Title>
          <PreviewBody>
            <ImagePreview>
              <img src="images/bg/bg-preview.jpg" alt="name" />
              <div className="text-preview">START TYPING</div>
              <div className="link-preview">
                <span>ADD LINK</span>
              </div>
            </ImagePreview>
          </PreviewBody>
        </PreviewContainer>
      </Body>
    </Root>
  );
};

export default StoryPreview;
