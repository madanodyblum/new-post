import React, { useCallback, useEffect, useState } from "react";
import { ProfileSlug } from "@Constants/types";
import Header from "@Components/shareable/Header";
import Tab from "@Components/shareable/Tab";
import { PROFILE_TABS } from "@Constants/consts";
import ProfilePosts from "./ProfilePosts";
import ProfileAbout from "./ProfileAbout";
import ProfileFriends from "./ProfileFriends";
import ProfileMedia from "./ProfileMedia";
import {
  MainRoot,
  ProfileInner,
  ProfileHeader,
  HeaderInner,
  ProfileCover,
  PictureContent,
  CoverImage,
  OverLay,
  EditCover,
  UserImageContainer,
  UserImage,
  EditUserImageBtn,
  UserBio,
  BioContent,
  UserName,
  AddBioBtn,
  ProfileTabs,
  TabInner,
  TabBar,
  Actions,
  ActionButton,
  ProfileBody,
} from "./style";

type Props = {
  slug?: ProfileSlug;
};

const Profile: React.FC<Props> = (props: Props) => {
  const { slug = "" } = props;

  const [selectedTab, setSelectedTab] = useState("1");

  const handleTab = useCallback(
    (tabId) => () => {
      setSelectedTab(tabId);
    },
    []
  );

  return (
    <>
      <Header />
      <MainRoot>
        <div className="container">
          <ProfileInner>
            <ProfileHeader>
              <HeaderInner>
                <ProfileCover>
                  <PictureContent>
                    <CoverImage src="images/bg/nature.jpg" alt="cover image" />
                    <OverLay />
                    <EditCover>
                      <i
                        className="mdi mdi-camera"
                        style={{ marginRight: 5 }}
                      />
                      Edit Cover
                    </EditCover>
                  </PictureContent>
                  <UserImageContainer>
                    <UserImage
                      src="images/user-img/user-img-1.png"
                      alt="user-image"
                    />
                    <EditUserImageBtn>
                      <i className="mdi mdi-camera" />
                    </EditUserImageBtn>
                  </UserImageContainer>
                </ProfileCover>
                <UserBio>
                  <BioContent>
                    <UserName>LXSX619</UserName>
                    <AddBioBtn className="btn-link-text">Add Bio</AddBioBtn>
                  </BioContent>
                </UserBio>
              </HeaderInner>
            </ProfileHeader>

            <ProfileTabs>
              <TabInner>
                <TabBar>
                  {PROFILE_TABS?.map((tab, index) => {
                    return (
                      <Tab
                        key={tab.id}
                        onClick={handleTab(tab.id)}
                        selected={selectedTab === tab.id}
                      >
                        {tab.name}
                      </Tab>
                    );
                  })}
                </TabBar>
                <Actions>
                  <ActionButton className="btn btn-gray">
                    <i className="mdi mdi-pencil" style={{ marginRight: 5 }} />
                    Edit Profile
                  </ActionButton>
                  <ActionButton className="btn btn-gray">
                    <i className="mdi mdi-eye" />
                  </ActionButton>
                  <ActionButton className="btn btn-gray">
                    <i className="mdi mdi-magnify" />
                  </ActionButton>
                </Actions>
              </TabInner>
            </ProfileTabs>
            <ProfileBody>
              {selectedTab === "1" && <ProfilePosts />}
              {selectedTab === "2" && <ProfileAbout />}
              {selectedTab === "3" && <ProfileFriends />}
              {selectedTab === "4" && <ProfileMedia />}
            </ProfileBody>
          </ProfileInner>
        </div>
      </MainRoot>
    </>
  );
};

export default Profile;
