import styled from "styled-components";
import { IColor } from "@Components/data/baseStyles";
import { rgba } from "polished";
export const RadioGroupContainer = styled.div`
  margin: 10px 0;
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
  .radio-image {
    background-color: ${IColor.backgroundDark};
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    .mdi {
      font-size: 28px;
      color: ${IColor.textGray};
    }
  }
  .radio-text {
    h6 {
      font-size: 16px;
      font-weight: 500;
      color: ${IColor.textDark};
      margin-bottom: 5px;
    }
    span {
      font-size: 14px;
      font-weight: 400;
      color: ${IColor.textGray};
    }
  }
  .radio-icon {
    &::before {
      content: "\F043D";
      font-family: "Material Design Icons";
      font-size: 24px;
      color: ${IColor.textGray};
    }
  }
  &.active {
    background-color: ${() =>
      rgba({ red: 38, green: 128, blue: 235, alpha: 0.1 })};
    .radio-icon {
      &::before {
        content: "\F043E";
        color: ${IColor.blue};
      }
    }
  }
`;

export const CustomRadioGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 15px 0;

  .radio-label {
    display: block;
    position: relative;
    padding-left: 25px;
    margin-right: 15px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
    color: $textGray;
    user-select: none;
    &:hover {
      input ~ .checkmark {
        background-color: ${IColor.backgroundGray};
      }
    }
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      &:checked ~ .checkmark {
        background-color: ${IColor.blue};
        &:after {
          display: block;
        }
      }
    }
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 18px;
      width: 18px;
      background-color: #eee;
      border-radius: 50%;
      &:after {
        content: "";
        position: absolute;
        display: none;
        top: 5px;
        left: 5px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: white;
      }
    }
  }
`;
