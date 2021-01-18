import styled from "styled-components";
import { IColor } from "@Components/data/baseStyles";

export const Root = styled.div`
    flex-grow: 1;
    height: 100%;
`;

export const Header = styled.div`
  height: 60px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Body = styled.div`
  height: calc(100% - 122px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PreviewContainer = styled.div`
  background-color: #ffffff;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 20px 15px 15px 15px;
  width: 90%;
  height: 100%;
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${IColor.textDark};
  padding: 0 15px 15px 0;
`;

export const PreviewBody = styled.div`
  height: calc(100% - 30px);
  background-color: #18191a;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImagePreview = styled.div`
  width: 305px;
  height: calc(100% - 30px);
  margin: 0 auto;
  border-radius: 10px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .text-preview {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    opacity: 0.7;
  }

  .link-preview {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 76px;
    padding: 10px;
    text-align: center;
    overflow: hidden;

    span {
      background-color: rgba(0, 0, 0, 0.3);
      color: rgba(255, 255, 255, 0.7);
      font-size: 16px;
      font-weight: 400;
      display: block;
      overflow: hidden;
      width: 100%;
      height: 50px;
      padding: 10px;
      border-radius: 8px;
      text-align: center;
    }
  }
`;