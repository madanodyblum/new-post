import { IColor } from "@Components/data/baseStyles";
import styled, { keyframes } from "styled-components";
import ReactModal from "react-modal";
import { darken } from "polished";
const animateScale = keyframes`
    from {
      transform: scale(0.9);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1700;
  width: inherit;
  outline: 0;
`;
export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1600;
`;

export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding-bottom: calc(60px + 16px);
  padding-top: calc(60px + 16px);
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 2000;
  &.modal-body {
    position: relative;
    background-color: ${IColor.white};
    border-radius: 10px;
    width: 500px;
    height: 440px;
    box-shadow: 0 12px 28px 0 ${IColor.shadow2}, 0 2px 4px 0 ${IColor.shadow1},
      inset 0 0 0 1px ${IColor.shadowInset};
    animation: ${animateScale} 0.4s;
    overflow: hidden;
  }
  .content-create-post {
    position: fixed;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s ease;
    transform: translateX(-100%) translateZ(1px);
    &.active {
      opacity: 1;
      visibility: visible;
      transform: translateX(0%) translateZ(1px);
      transition: all 0.4s ease;
    }
  }
`;
export const Header = styled.div`
  padding: 20px 0;
  background-color: ${IColor.white};
  // height: 60px;
  text-align: center;
  position: relative;
  border-bottom: 1px solid ${IColor.borderColor};
  h2 {
    margin-bottom: 0;
    color: ${IColor.textDark};
    font-size: 20px;
  }
  .close {
    color: ${IColor.textGray};
    background-color: ${IColor.background};
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    right: 10px;
    top: 15px;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    &:hover,
    &:focus {
      background-color: ${(p) => darken(0.2, IColor.background)};
      text-decoration: none;
      cursor: pointer;
    }
  }
  .back {
    color: ${IColor.textGray};
    background-color: ${IColor.background};
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    left: 10px;
    top: 15px;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    &:hover,
    &:focus {
      background-color: ${(p) => darken(0.2, IColor.background)};
      text-decoration: none;
      cursor: pointer;
    }
  }
`;
export const Content = styled.div`
  overflow-y: auto;
  max-height: 560px;
  height: 327px;
  .msg-title {
    color: ${IColor.textDark};
    font-size: 1.2rem;
    font-weight: 700;
    margin: 15px 0 8px 0;
  }
  .msg-desc {
    color: ${IColor.textGray};
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 23px;
  }
`;
export const Footer = styled.div`
  padding: 10px 15px 15px 15px;
  .btn-default {
    width: 100%;
  }
`;
