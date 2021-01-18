import { IColor } from "@Components/data/baseStyles";
import styled from "styled-components";

export const CreatePostStyle = styled.div`
  margin: 15px 0 35px 0;
  .inner {
    padding: 10px;
    background-color: ${IColor.white};
    border-radius: 10px;
    border: 1px solid ${IColor.borderColor};
    .cs-header {
      display: grid;
      grid-template-columns: 45px auto;
      column-gap: 5px;
      align-items: center;
      padding-bottom: 10px;
      border-bottom: 1px solid ${IColor.borderColor};
      .user-image {
        img {
          width: 40px;
          border-radius: 50%;
        }
      }
      .user-input {
        background-color: ${IColor.background};
        border-radius: 30px;
        height: 40px;
        padding: 8px 12px;
        color: ${IColor.textGray};
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: all 0.2s ease;
        span {
          font-size: 14px;
          font-weight: 400;
        }
        &:hover {
          background-color: darken($color: ${IColor.background}, $amount: 3);
          transition: all 0.2s ease;
        }
      }
    }
    .cs-body {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 10px;
      .send-photo {
        flex: 0 0 50%;
        max-width: 50%;
        text-align: center;
      }
      .send-feeling {
        flex: 0 0 50%;
        max-width: 50%;
        text-align: center;
      }
    }
    .btn-send {
      min-width: 180px;
      border-radius: 10px;
      font-size: 14px;
      font-weight: 500;
      color: ${IColor.textGray};
      background-color: transparent;
      .mdi {
        margin-right: 5px;
        font-size: 22px;
        position: relative;
        top: 2px;
      }
      &.icon-green {
        .mdi {
          color: #45bd62;
        }
      }
      &.icon-yellow {
        .mdi {
          color: #f7ba2c;
        }
      }
      &:hover {
        background-color: ${IColor.background};
      }
    }
  }
  @media (max-width: 360px) {
    .inner .cs-body {
      flex-direction: column;
      .send-photo,
      .send-feeling {
        flex: 0 0 100%;
        max-width: 100%;
      }
    }
  }
`;

export const PatternCategory = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s ease;
  transform: translateX(100%) translateZ(1px);
  &.active {
    opacity: 1;
    visibility: visible;
    transition: all 0.4s ease;
    transform: translateX(0%) translateZ(1px);
  }
  .modal-body {
    padding: 0 15px;
  }
  .pattern-group {
    margin-top: 20px;
    max-height: 430px;
    h6 {
      font-size: 16px;
      font-weight: 600;
      padding: 15px 0 5px 5px;
      &:first-child {
        padding-top: 0;
      }
    }
    .list {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      .pattern {
        flex: 0 0 90px;
        max-width: 90px;
        padding: 5px;
        margin-bottom: 5px;
        .ptn-inner {
          img {
            width: 100%;
            border-radius: 15px;
          }
        }
        &.active {
          img {
            border: 3px solid ${IColor.blue};
          }
        }
      }
    }
  }
`;
