import React from "react";
import styled from "styled-components";
import PropertyPanel from "./PropertyPanel";
import StoryPreview from "./StoryPreview";

const Root = styled.div`
  height: 100vh;
  display: flex;
`;

const CreateStory = () => {
  return (
    <Root>
      <PropertyPanel />
      <StoryPreview />
    </Root>
  );
};

export default CreateStory;
