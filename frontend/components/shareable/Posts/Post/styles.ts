import { IColor } from "@Components/data/baseStyles";
import styled from "styled-components";
import { rgba } from "polished";
export const CardFeed = styled.div`
  margin-bottom: 30px;
  .card-inner {
    padding: 10px 10px 25px 10px;
    background-color: ${IColor.white};
    border-radius: 10px;
    border: 1px solid ${IColor.borderColor};
    .card-body {
      padding: 0 10px;
      .hashtags {
        margin-bottom: 10px;
        ul {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-wrap: wrap;
          li {
            margin: 0 8px 5px 0;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
            a {
              display: block;
              font-size: 14px;
              font-weight: 500;
              color: ${IColor.textLight};
              &:hover {
                color: ${IColor.blue};
              }
            }
          }
        }
      }
      .desc {
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin-bottom: 10px;
        color: ${IColor.textGray};
      }
      .feed-image {
        margin-bottom: 10px;
        img {
          width: 100%;
          border-radius: 10px;
        }
      }
      .links {
        background-color: ${IColor.background};
        margin-bottom: 10px;
        padding: 8px;
        border-radius: 10px;
        a {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-size: 14px;
          font-weight: 400;
          color: ${IColor.textGray};
          &:hover {
            color: ${IColor.blue};
          }
        }
      }
    }
    .card-footer {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 0;
      .link-item {
        flex: 0 0 33.33%;
        max-width: 33.33%;
        text-align: center;
        position: relative;
        &.show-emotion-list {
          &:hover {
            .emotion-list {
              display: block;
            }
          }
        }
        .btn-link-text {
          span {
            margin-left: 5px;
            color: ${IColor.textGray};
            font-size: 11px;
            font-weight: 700;
          }
          .mdi {
            margin-right: 5px;
            color: ${IColor.textGray};
            position: relative;
            top: 1px;
          }
          &:hover {
            color: ${IColor.blue};
            span,
            .mdi {
              color: ${IColor.blue};
            }
          }
        }
      }
    }
  }
  @media (max-width: 400px) {
    .card-feed .card-inner .card-write .write-input {
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

export const HeaderPost = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .card-user-info {
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      .user-img {
        width: 45px;
        height: 45px;
        img {
          width: 45px;
          height: 45px;
          border-radius: 50%;
        }
      }
      .user-name {
        margin-left: 8px;
        .name {
          margin-bottom: 5px;
          font-size: 16px;
          font-weight: 700;
          color: ${IColor.textDark};
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .date {
          margin-bottom: 0;
          color: ${IColor.textLight};
          font-size: 12px;
          font-weight: 400;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }
    }
  }
`;
