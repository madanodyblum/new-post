import styled from "styled-components";
import { IColor } from "@Components/data/baseStyles";
import { Button } from "@Components/shareable/ButtonsStyles";

export const MainRoot = styled.div`
  margin-top: 90px;
`;

export const ProfileInner = styled.div`
  width: 65%;
  margin: 0 auto;
`;

export const ProfileHeader = styled.div``;

export const HeaderInner = styled.div`
  background-color: ${IColor.white};
  border-radius: 10px 10px 0 0;
  border: 1px solid ${IColor.borderColor};
  border-bottom: none;
  margin: 0 auto;
`;

export const ProfileCover = styled.div`
  position: relative;
`;

export const PictureContent = styled.div`
  position: relative;
  margin: 0 auto 0 auto;
  width: 100%;
  height: 280px;
  border-radius: 10px;
`;

export const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  background-color: ${IColor.backgroundDark};
  object-fit: cover;
  border-radius: 10px;
`;

export const EditCover = styled.button`
  display: inline-block;
  border: none;
  cursor: pointer;
  padding: 0.5rem 0.7rem;

  position: absolute;
  bottom: 15px;
  right: 15px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.5);
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
`;

export const UserImageContainer = styled.div`
  position: absolute;
  bottom: -40px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
`;

export const UserImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  border: 4px solid #ffffff;
  background-color: #e4e6eb;
`;

export const EditUserImageBtn = styled.button`
  position: absolute;
  right: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: #2680eb;
  color: #ffffff;
  border: 3px solid #ffffff;
  padding: 0;
  cursor: pointer;
  z-index: 15;
  bottom: 0;
`;

export const OverLay = styled.div`
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, black 100%);
  width: 100%;
  height: 120px;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 0 0 10px 10px;
`;

export const UserBio = styled.div`
  margin-top: 50px;
`;

export const BioContent = styled.div`
  width: 450px;
  margin: 0 auto;
  text-align: center;
`;

export const UserName = styled.h4`
  font-size: 24px;
`;

export const AddBioBtn = styled(Button)`
  margin: 5px 0 10px 0;
  color: #2680eb !important;
  &:hover {
    opacity: 0.7;
  }
`;

export const ProfileTabs = styled.div`
  position: sticky;
  top: 70px;
  z-index: 1500;
`;

export const TabInner = styled.div`
  margin: 0 auto;
  display: flex;
  padding: 0 15px;
  border-radius: 0 0 10px 10px;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border: 1px solid #e4e4e4;
`;

export const TabBar = styled.div`
  display: flex;
`;

export const Actions = styled.div`
  display: flex;
`;

export const ActionButton = styled(Button)`
  height: 36px;
  padding: 0 10px !important;
  margin-left: 4px;

  &:hover {
    background-color: #d5d8e0 !important;
  }
`;

export const ProfileBody = styled.div`
  margin-top: 10px;
  padding-bottom: 60px;
`;
