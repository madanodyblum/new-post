import React from "react";
import { Root, PhotoContainer, Photo, EditButton } from "./style";

const Photos = () => {
  return (
    <Root>
      <PhotoContainer>
        <Photo src="images/bg/01.jpg" alt="" />
        <EditButton>
          <i className="mdi mdi-pencil" />
        </EditButton>
      </PhotoContainer>
      <PhotoContainer>
        <Photo src="images/bg/05.jpg" alt="" />
        <EditButton>
          <i className="mdi mdi-pencil" />
        </EditButton>
      </PhotoContainer>
      <PhotoContainer>
        <Photo src="images/bg/02.jpg" alt="" />
        <EditButton>
          <i className="mdi mdi-pencil" />
        </EditButton>
      </PhotoContainer>
      <PhotoContainer>
        <Photo src="images/bg/03.jpg" alt="" />
        <EditButton>
          <i className="mdi mdi-pencil" />
        </EditButton>
      </PhotoContainer>
      <PhotoContainer>
        <Photo src="images/bg/04.jpg" alt="" />
        <EditButton>
          <i className="mdi mdi-pencil" />
        </EditButton>
      </PhotoContainer>
    </Root>
  );
};

export default Photos;
