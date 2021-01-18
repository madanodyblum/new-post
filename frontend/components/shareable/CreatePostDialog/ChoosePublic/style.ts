import { IColor } from "@Components/data/baseStyles";
import styled from "styled-components";
import { darken } from "polished";

export const Root = styled.div`
  ${({ independent, active }) => {
    if (independent) {
      return ``;
    } else {
      return `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        visibility: ${active ? "visible" : "hidden"};
        transition: all 0.4s ease;
        opacity: ${active ? 1 : 0};
        `;
    }
  }}
`;

export const Header = styled.div`
  padding: 20px 0;
  background-color: ${IColor.white};
  text-align: center;
  position: relative;
  border-bottom: 1px solid ${IColor.borderColor};

  h2 {
    margin-bottom: 0;
    color: ${IColor.textDark};
    font-size: 20px;
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

export const Body = styled.div`
  padding: 0 15px;

  .msg-title {
    color: #060606;
    font-size: 1.2rem;
    font-weight: 700;
    margin: 15px 0 8px 0;
  }

  .msg-desc {
    color: #474747;
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 23px;
  }

  .radio-group {
    margin: 15px 0 0 0;
  }
`;

export const CustomRadio = styled.div`
  display: grid;
  grid-template-columns: 60px auto 30px;
  column-gap: 10px;
  align-items: center;
  margin-bottom: 15px;
  padding: 8px;
  border-radius: 8px;
  user-select: none;
  cursor: pointer;

  ${({ selected }) => {
    if (selected) {
      return `
            background-color: rgba(38, 128, 235, 0.1);
            `;
    }
  }}

  .radio-image {
    background-color: #e4e6eb;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    .mdi {
      font-size: 28px;
      color: #474747;
    }
  }
`;

export const RadioBox = styled.div`
  &::before {
    content: "\\F043D";
    font-family: "Material Design Icons";
    font-size: 24px;
    color: #474747;
  }
  ${({ selected }) => {
    if (selected) {
      return `
              &::before {
                  content: "\\F043E";
                  color: #2680EB;
              }`;
    }
  }}
`;
