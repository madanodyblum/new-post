import { IColor } from "@Components/data/baseStyles";
import styled from "styled-components";
import { darken } from "polished";
export const Button = styled.button`
  display: inline-block;
  border: none;
  cursor: pointer;
  padding: 0.5rem 0.7rem;
  .mdi {
    font-size: 18px;
  }

  &.btn-dots {
    background-color: ${IColor.white};
    border: none;
    width: 35px;
    height: 35px;
    padding: 0.5rem 0;
  }
  &.btn-link-text {
    background-color: ${IColor.white};
    border: none;
    font-size: 13px;
    font-weight: 500;
    color: ${IColor.textGray};
  }
  &.btn-follow {
    background-color: ${IColor.background};
    border: none;
    border-radius: 50px;
    padding: 5px 10px;
    font-size: 12px;
    font-weight: 500;
    color: ${IColor.textGray};
    &.active {
      background-color: ${IColor.blue};
      color: ${IColor.white};
    }
  }
  &.btn-default {
    background-color: ${IColor.blue};
    border: none;
    border-radius: 8px;
    padding: 0.7em 1.5rem;
    font-size: 14px;
    font-weight: 500;
    color: ${IColor.white};
    cursor: pointer;
    &:hover {
      background-color: ${(p) => darken(0.2, IColor.blue)};
    }
  }
  &.btn-gray {
    background-color: ${IColor.backgroundDark};
    border: none;
    border-radius: 8px;
    padding: 0.7em 1.5rem;
    font-size: 14px;
    font-weight: 500;
    color: ${IColor.textGray};
    cursor: pointer;
    &:hover {
      background-color: ${(p) => darken(0.2, IColor.backgroundDark)};
    }
  }
  &.btn-circle {
    background-color: ${IColor.backgroundDark};
    width: 40px;
    height: 40px;
    border: none;
    color: ${IColor.textGray};
    border-radius: 50%;
    cursor: pointer;
    padding: 0;
    .mdi {
      font-size: 24px;
    }
    &:hover {
      background-color: ${(p) => darken(0.1, IColor.backgroundDark)};
    }
  }
`;
