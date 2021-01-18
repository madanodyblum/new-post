import { IColor } from "@Components/data/baseStyles";
import { rgba } from "polished";
import styled from "styled-components";
import { IProps } from "./props";

export const ReactionsStyles = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  position: absolute;
  top: -40px;
  background-color: ${IColor.white};
  box-shadow: 0 3px 15px
    ${() =>
      rgba({
        red: 0,
        green: 0,
        blue: 0,
        alpha: 0.1,
      })};
  padding: 5px;
  border-radius: 8px;
  z-index: 50;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      margin-right: 2px;
      cursor: pointer;
      position: relative;
      transition: all 0.2s ease;
      &:last-child {
        margin: 0;
      }
      &:hover {
        img {
          transform: scale(1);
          transition: all 0.2s ease;
        }
        span {
          top: -20px;
          transition: all 0.2s ease;
          opacity: 1;
        }
      }
      span {
        font-size: 12px !important;
        font-weight: 400 !important;
        position: absolute;
        top: -10px;
        right: 50%;
        color: ${IColor.white} !important;
        padding: 2px 5px;
        border-radius: 3px;
        opacity: 0;
        background-color: ${() =>
          rgba({
            red: 0,
            green: 0,
            blue: 0,
            alpha: 0.8,
          })};
        transform: translateX(50%);
        transition: all 0.2s ease;
      }
      img {
        width: 30px;
        height: 30px;
        transform: scale(0.8);
        transition: all 0.2s ease;
      }
    }
  }
`;
