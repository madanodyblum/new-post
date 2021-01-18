import { IColor } from "@Components/data/baseStyles";
import styled from "styled-components";
import { darken } from "polished";

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

export const CreatePostContainer = styled.div`
  width: 100%;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s ease;

  ${({ active }) => {
    if (active) {
      return `opacity: 1;
      visibility: visible;
      transition: all 0.4s ease;
        `;
    }
  }}
`;


