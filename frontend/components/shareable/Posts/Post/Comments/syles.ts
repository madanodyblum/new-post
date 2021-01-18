import { IColor } from "@Components/data/baseStyles";
import { rgba } from "polished";
import styled from "styled-components";

export const ListContainer = styled.div`
  display: block;
  border-top: 1px solid ${IColor.borderColor};
  padding: 10px 0;
  .more-comments {
    a {
      display: inline-block;
      font-size: 12px;
      font-weight: 500;
      color: ${IColor.textGray};
      &:hover {
        color: ${IColor.blue};
      }
    }
    margin-bottom: 10px;
  }
  .comments-list {
    .comment-item {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      margin-bottom: 15px;
      padding-right: 20px;
      &:last-child {
        margin-bottom: 0;
      }
      .comment-user-image {
        img {
          width: 35px;
          border-radius: 50%;
        }
      }
      .comment-body {
        margin-left: 10px;
        .text {
          background-color: ${IColor.backgroundGray};
          border-radius: 10px;
          padding: 8px 30px 15px 8px;
          font-size: 13px;
          font-weight: 400;
          line-height: 20px;
          color: ${IColor.textGray};
          position: relative;
          .emotion-image {
            width: 35px;
          }
          &.just-emo {
            background-color: ${IColor.white};
          }
          .comment-emotion {
            background-color: ${IColor.white};
            border-radius: 50px;
            padding: 1px 5px 2px 2px;
            position: absolute;
            bottom: 5px;
            right: -15px;
            box-shadow: 0 3px 12px
              ${() =>
                rgba({
                  red: 0,
                  green: 0,
                  blue: 0,
                  alpha: 0.01,
                })};
            img {
              width: 20px;
              height: 20px;
              margin-right: 3px;
            }
            span {
              font-size: 12px;
              font-weight: 500;
            }
          }
        }
        .comment-like {
          margin-top: 5px;
          color: ${IColor.textLight};
          .btn-link {
            font-size: 12px;
            font-weight: 500;
            background-color: transparent;
            border: none;
            padding: 3px 5px;
            color: ${IColor.textLight};
            cursor: pointer;
            &.active {
              color: ${IColor.blue};
            }
          }
          span {
            font-size: 12px;
            font-weight: 500;
          }
        }
      }
    }
  }
`;

export const NewCommentContainer = styled.div`
  display: grid;
  grid-template-columns: 40px auto;
  column-gap: 10px;
  align-items: center;
  padding: 10px 10px 0 10px;
  border-top: 1px solid ${IColor.borderColor};
  position: relative;

  .msg-image {
    width: 120px;
    height: 120px;
    margin-bottom: 8px;
  }
  .user-image {
    img {
      width: 100%;
      border-radius: 50%;
    }
  }
  .write-input {
    position: relative;
    input {
      width: 100%;
      font-size: 14px;
      padding: 8px 100px 8px 15px;
      border-radius: 30px;
      background-color: ${IColor.backgroundGray};
      border: none;
      height: 33px;
    }
    .btn-attach {
      position: absolute;
      top: 0;
      height: 33px;
      border-radius: 30px;
      padding: 7px;
      color: ${IColor.textGray};
      &.emo {
        right: 0px;
      }
      &.cam {
        right: 33px;
      }
      &.pic {
        right: 66px;
      }
      &:hover {
        color: ${IColor.blue};
      }
    }
  }
  .enter-post {
    position: absolute;
    bottom: -15px;
    left: 75px;
    font-size: 12px;
    font-weight: 500;
    color: ${IColor.textLight};
  }
  @media (max-width: 400px) {
    .write-input {
      height: 68px;
      background-color: ${IColor.backgroundGray};
      border-radius: 15px;
      padding: 0 5px;
      input {
        border-radius: 15px 15px 0 0;
        padding-right: 8px;
        border-bottom: 1px solid
          ${() =>
            rgba({
              red: 0,
              green: 0,
              blue: 0,
              alpha: 0.01,
            })};
      }
      .btn-attach {
        bottom: 0;
        top: unset;
      }
    }
  }
`;
