import React, { useCallback } from "react";
import { Button } from "@Components/shareable/ButtonsStyles";
import {
  Root,
  Header,
  Logo,
  Body,
  Info,
  Title,
  UserImage,
  ChooseContainer,
  Line,
  AddText,
  AbIcon,
  TextArea,
  Select,
  Backgrounds,
  Footer,
} from "./style";
import useDialog from "@Hooks/useDialog";
import PrivacyDialog from "@Components/shareable/PrivacyDialog";

const PropertyPanel = () => {
  const { openDialog } = useDialog(PrivacyDialog);

  const handleSetting = useCallback(() => {
    openDialog({});
  }, []);

  return (
    <Root>
      <Header>
        <Button className="btn-circle">
          <i className="mdi mdi-close" />
        </Button>
        <a href="/">
          <Logo src="images/logo.svg" alt="logo" />
        </a>
      </Header>
      <Body>
        <Info>
          <Title>
            <h4>Your Story</h4>
            <Button className="btn-circle" onClick={handleSetting}>
              <i className="mdi mdi-cog-outline" />
            </Button>
          </Title>
          <UserImage>
            <img src="images/user-img/user-img-9.png" alt="user" />
            <h6>LXSX619</h6>
          </UserImage>
        </Info>
        <ChooseContainer>
          <Line>
            <AddText>
              <AbIcon>
                <i className="mdi mdi-alphabet-latin" />
              </AbIcon>
              <h6>Add Text</h6>
            </AddText>
          </Line>
          <Line>
            <TextArea cols="30" rows="3" placeholder="Start typing" />
          </Line>
          <Line>
            <TextArea cols="30" rows="3" placeholder="Add Link" />
          </Line>
          <Line>
            <Select required>
              <option selected>CLEAN</option>
              <option>ROBOTO</option>
              <option>MONSTRATE</option>
              <option>Segoe UI</option>
            </Select>
          </Line>
          <Line>
            <Backgrounds>
              <h6 className="title">Backgrounds</h6>
              <div className="bg-inner">
                <div className="bg-item active">
                  <img src="images/patterns/01.jpg" alt="pattern-name" />
                </div>
                <div className="bg-item">
                  <img src="images/patterns/02.jpg" alt="pattern-name" />
                </div>
                <div className="bg-item">
                  <img src="images/patterns/03.jpg" alt="pattern-name" />
                </div>
                <div className="bg-item">
                  <img src="images/patterns/04.jpg" alt="pattern-name" />
                </div>
                <div className="bg-item">
                  <img src="images/patterns/05.jpg" alt="pattern-name" />
                </div>
                <div className="bg-item">
                  <img src="images/patterns/06.jpg" alt="pattern-name" />
                </div>
                <div className="bg-item">
                  <img src="images/patterns/07.jpg" alt="pattern-name" />
                </div>
                <div className="bg-item">
                  <img src="images/patterns/08.jpg" alt="pattern-name" />
                </div>
                <div className="bg-item">
                  <img src="images/patterns/09.jpg" alt="pattern-name" />
                </div>
                <div className="bg-item">
                  <img src="images/patterns/10.jpg" alt="pattern-name" />
                </div>
                <div className="bg-item">
                  <img src="images/patterns/11.jpg" alt="pattern-name" />
                </div>
                <div className="bg-item">
                  <img src="images/patterns/12.jpg" alt="pattern-name" />
                </div>
                <div className="bg-item">
                  <img src="images/patterns/13.jpg" alt="pattern-name" />
                </div>
                <div className="bg-item">
                  <img src="images/patterns/14.jpg" alt="pattern-name" />
                </div>
                <div className="bg-item">
                  <img src="images/patterns/15.jpg" alt="pattern-name" />
                </div>
                <div className="bg-item">
                  <img src="images/patterns/05.jpg" alt="pattern-name" />
                </div>
              </div>
              <div className="load-more">
                <button className="btn-loadMore">
                  <i className="mdi mdi-menu-down"></i>
                </button>
              </div>
            </Backgrounds>
          </Line>
        </ChooseContainer>
      </Body>
      <Footer>
        <Button className="btn btn-gray">Discard</Button>
        <Button className="btn btn-default">Share to Story</Button>
      </Footer>
    </Root>
  );
};

export default PropertyPanel;
