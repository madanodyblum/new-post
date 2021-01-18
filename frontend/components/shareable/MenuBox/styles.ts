import { IColor } from "@Components/data/baseStyles";
import { rgba } from "polished";
import styled from "styled-components";
export const BoxStyles = styled.div`
  position: relative;
  &:hover {
    .option-list {
      display: block;
    }
  }
  .option-list {
    position: absolute;
    top: 34px;
    right: 0;
    background-color: ${IColor.white};
    border-radius: 8px;
    box-shadow: 0 3px 15px
      ${() =>
        rgba({
          red: 0,
          green: 0,
          blue: 0,
          alpha: 0.1,
        })};
    min-width: 140px;
    padding: 5px;
    display: none;
    &::before {
      content: "";
      position: absolute;
      right: 10px;
      top: -8px;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 7.5px 10px 7.5px;
      border-color: transparent transparent ${IColor.white} transparent;
    }
    li {
      a {
        display: block;
        font-size: 14px;
        font-weight: 400;
        color: ${IColor.textGray};
        padding: 5px;
        .mdi {
          margin-right: 5px;
          font-size: 16px;
          position: relative;
          top: 1px;
        }
        &:hover {
          color: ${IColor.blue};
        }
      }
    }
  }
`;
