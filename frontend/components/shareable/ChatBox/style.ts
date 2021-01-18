import { IColor } from "@Components/data/baseStyles";
import styled from "styled-components";

export const Root = styled.div`
  position: fixed;
  right: 80px;
  bottom: 0;
  z-index: 2000;

  background-color: #ffffff;
  box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  width: 328px;
  height: 455px;
  border-radius: 8px 8px 0 0;
`;

export const ChatContent = styled.div`
  height: 100%;
`;

export const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px;
  position: relative;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 -1px #e4e4e4 inset,
    0 2px 1px -1px rgba(255, 255, 255, 0.5) inset;

  .chat-contact-info {
    display: grid;
    grid-template-columns: 32px auto;
    column-gap: 10px;
    align-items: center;
    max-width: 200px;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;

    &:hover {
      background-color: rgba(38, 128, 235, 0.1);
    }
    .user-img {
      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }
    }

    .user-name {
      font-size: 14px;
      font-weight: 500;
      color: #060606;
      overflow: hidden;

      .mdi {
        margin-left: 5px;
        font-size: 18px;
        position: relative;
        top: 2px;
      }
    }
  }
`;

export const CloseButton = styled.div`
  background-color: transparent;
  border: none;
  border-radius: 50%;
  color: ${IColor.blue};
  width: 30px;
  height: 30px;
  padding: 0;
  cursor: pointer;

  .mdi {
    font-size: 24px;
  }
`;

export const ChatBody = styled.div`
  height: ${({ replyOn }) =>
    replyOn ? "calc(100% - 152px);" : "calc(100% - 100px);"};
  padding: 5px;
  overflow-y: auto;

  .date {
    font-size: 12px;
    font-weight: 500;
    color: #474747;
    text-align: center;
    margin: 2px 0;
  }
`;

export const ChatFooter = styled.div`
  padding: 5px;
`;

export const MsgSent = styled.div`
  display: grid;
  grid-template-columns: auto auto 22px;
  margin-bottom: 8px;

  .msg-text {
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    max-width: 200px;

    .text {
      padding: 10px 10px 0 10px;
      background-color: #2680eb;
      color: #ffffff;
      font-size: 14px;
      font-weight: 300;
      border-radius: 18px 3px 18px 18px;
      line-height: 22px;
      display: inline-block;

      .msg-date {
        font-size: 11px;
        font-weight: 300;
        color: #ddd;
        text-align: right;
      }

      .msg-reaction {
        background-color: #ffffff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        display: inline-block;
        padding: 0 5px 0 2px;
        border-radius: 40px;
        min-width: 30px;
        position: absolute;
        left: -15px;
        bottom: -5px;

        img {
          width: 16px;
        }
        span {
          font-size: 12px;
          font-weight: 400;
          color: #060606;
        }
      }
    }

    .image {
      .msg-image {
        width: 120px;
        height: 120px;
        margin-bottom: 8px;
      }

      .msg-date {
        color: #474747;
      }

      .msg-reaction {
        left: -10px;
        bottom: 20px;
        img {
          width: 16px;
        }
      }
    }

    .msg-reaction {
      background-color: #ffffff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      display: inline-block;
      padding: 0 5px 0 2px;
      border-radius: 40px;
      min-width: 30px;
      position: absolute;
      left: -15px;
      bottom: -5px;

      img {
        width: 16px;
      }

      span {
        font-size: 12px;
        font-weight: 400;
        color: #060606;
      }
    }

    .msg-date {
      font-size: 11px;
      font-weight: 300;
      color: #ddd;
      text-align: right;
    }
  }

  .msg-menu {
    visibility: hidden;
  }

  &:hover {
    .msg-menu {
      visibility: visible;
    }
  }

  .msg-status {
    position: relative;

    &::before {
      font-family: "Material Design Icons";
      position: absolute;
      bottom: 0;
      right: 0;
      color: #474747;
      font-size: 14px;
    }
  }

  .msg-status.receive {
    &::before {
      content: "\\F012C";
    }
  }
  .msg-status.time {
    &::before {
      content: "\\F0150";
    }
  }
  .msg-status.read {
    &::before {
      content: "\\F012D";
      color: #2680eb;
    }
  }
`;

export const MsgReceived = styled.div`
  display: grid;
  grid-template-columns: 35px auto auto;
  margin-bottom: 8px;

  .msg-user-image {
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }

  .msg-text {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 185px;

    .text {
      padding: 10px 10px 0 10px;
      background-color: #e4e6eb;
      color: #060606;
      font-size: 14px;
      font-weight: 400;
      border-radius: 3px 18px 18px 18px;
      line-height: 22px;
      display: inline-block;

      .msg-date {
        font-size: 11px;
        font-weight: 400;
        color: #474747;
        text-align: left;
      }

      .msg-reaction {
        background-color: #ffffff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        display: inline-block;
        padding: 0 5px 0 2px;
        border-radius: 40px;
        min-width: 30px;
        position: absolute;
        right: -10px;
        bottom: -5px;

        img {
          width: 16px;
        }
        span {
          font-size: 12px;
          font-weight: 400;
          color: #060606;
        }
      }
    }
  }
`;
