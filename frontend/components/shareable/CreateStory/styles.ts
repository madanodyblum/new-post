import styled from "styled-components";
import { IColor } from "../../data/baseStyles";
export const CreateStoryBox = styled.div`
  margin-top: 40px;
  .inner {
    padding: 10px 10px;
    background-color: ${IColor.white};
    border-radius: 10px;
    border: 1px solid ${IColor.borderColor};
    cursor: pointer;
    .hover-content {
      border-radius: 10px;
      display: grid;
      grid-template-columns: 40px auto;
      column-gap: 10px;
      align-items: center;
      padding: 10px;
      .icon {
        background-color: rgba($color: ${IColor.blue}, $alpha: 0.1);
        color: ${IColor.blue};
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        .mdi {
          font-size: 24px;
        }
      }
      .text {
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
    }
    &:hover {
      .hover-content {
        background-color: ${IColor.background};
      }
    }
  }
`;
