import styled from "styled-components";
import { IColor } from "@Components/data/baseStyles";
import { darken, rgba } from "polished";
export const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 1550;
  .header-content {
    padding: 5px 30px;
    background-color: ${IColor.white};
    border: 1px solid ${IColor.borderColor};
    border-top: none;
    border-radius: 0 0 10px 10px;
    display: grid;
    grid-template-columns: 10% 20% 40% 10% 20%;
    grid-template-areas: "headerLogo headerUser headerSearch headerCreate headerMenu";
    .header-logo {
      grid-area: headerLogo;
      img {
        width: 60px;
      }
    }
    .header-user {
      grid-area: headerUser;
      .user-inner {
        position: relative;
        .user-image {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          position: relative;
          padding: 15px 0;
          cursor: pointer;
          img {
            width: 30px;
            margin-right: 5px;
            border-radius: 50%;
          }
          h6 {
            margin-bottom: 0;
            font-size: 14px;
            font-weight: 500;
            color: ${IColor.textGray};
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
        &:hover .user-list {
          display: block;
        }
        .user-list {
          display: none;
          position: absolute;
          top: 55px;
          left: 0;
          border-radius: 8px;
          min-width: 160px;
          padding: 5px;
          background-color: ${IColor.white};
          box-shadow: 0 3px 15px
            ${() =>
              rgba({
                red: 0,
                green: 0,
                blue: 0,
                alpha: 0.01,
              })};
          z-index: 100;
          &::before {
            content: "";
            position: absolute;
            left: 30px;
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
              padding: 8px;
              font-size: 14px;
              font-weight: 400;
              color: ${IColor.textGray};
              .mdi {
                font-size: 18px;
                margin-right: 5px;
                position: relative;
                top: 1px;
              }
              &:hover {
                color: ${IColor.blue};
              }
            }
          }
        }
      }
    }
    .header-search {
      grid-area: headerSearch;
      display: flex;
      align-items: center;
      justify-content: center;
      .search-input {
        background-color: ${IColor.background};
        border: none;
        padding: 12px 20px;
        border-radius: 30px;
        font-size: 14px;
        width: 100%;
      }
      .mobile-search {
        display: none;
        height: 100%;
        .btn-mobile-search {
          width: 40px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${IColor.textGray};
          border: none;
          cursor: pointer;
          background-color: transparent;
          .mdi {
            font-size: 24px;
          }
        }
      }
    }
    .header-create {
      grid-area: headerCreate;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      position: relative;
      .btn-default {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        padding: 0;
        .mdi {
          font-size: 24px;
        }
        &:hover {
          background-color: ${() => darken(0.09, IColor.blue)};
        }
      }
      .create-menu {
        display: none;
        visibility: hidden;
        position: absolute;
        top: 60px;
        right: 0;
        width: 300px;
        box-shadow: 0 10px 20px 0 ${IColor.shadow2},
          0 2px 4px 0 ${IColor.shadow1}, inset 0 0 0 1px ${IColor.shadowInset};
        background-color: ${IColor.white};
        border-radius: 10px;
        &.active {
          display: block;
          visibility: visible;
        }
        h4 {
          font-size: 22px;
          font-weight: 600;
          margin: 20px 16px 12px 16px;
        }
        ul {
          li {
            margin-bottom: 10px;
            padding: 0 10px;
            a {
              display: grid;
              grid-template-columns: 36px auto;
              column-gap: 10px;
              padding: 5px;
              border-radius: 5px;
              &:hover {
                background-color: ${() =>
                  rgba({
                    red: 38,
                    green: 128,
                    blue: 235,
                    alpha: 0.01,
                  })};
              }
              .icon {
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: ${IColor.background}Dark;
                color: ${IColor.textGray};
                border-radius: 50%;
                width: 36px;
                height: 36px;
                .mdi {
                  font-size: 24px;
                }
              }
              .text {
                h6 {
                  margin-bottom: 5px;
                  font-size: 14px;
                  font-weight: 600;
                  color: ${IColor.textDark};
                }
                span {
                  font-size: 14px;
                  font-weight: 300;
                  color: ${IColor.textGray};
                }
              }
            }
          }
        }
      }
    }
    .header-menu {
      grid-area: headerMenu;
      text-align: right;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .links-menu {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        li {
          a {
            display: block;
            font-size: 16px;
            font-weight: 500;
            color: ${IColor.textGray};
            margin-left: 30px;
            &:hover {
              color: ${IColor.blue};
            }
          }
        }
      }
      .mobile-links {
        display: none;
        align-items: center;
        justify-content: flex-end;
        position: relative;
        height: 100%;
        .icon {
          width: 40px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${IColor.textGray};
          border: none;
          cursor: pointer;
          .mdi {
            font-size: 24px;
            position: relative;
            right: -1px;
          }
        }
        &:hover {
          .link-list {
            display: flex;
          }
        }
        .link-list {
          display: none;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          position: absolute;
          top: 50px;
          right: -30px;
          border-radius: 8px;
          min-width: 130px;
          padding: 5px;
          background-color: ${IColor.white};
          box-shadow: 0 3px 15px
            ${() =>
              rgba({
                red: 0,
                green: 0,
                blue: 0,
                alpha: 0.01,
              })};
          z-index: 100;
          &::before {
            content: "";
            position: absolute;
            right: 42px;
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
              padding: 8px;
              font-size: 14px;
              font-weight: 400;
              color: ${IColor.textGray};
              .mdi {
                font-size: 18px;
                margin-right: 5px;
                position: relative;
                top: 1px;
              }
              &:hover {
                color: ${IColor.blue};
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 1199px) {
    .header-content {
      grid-template-columns: 15% 25% 40% 10% 10%;
      .header-menu {
        .links-menu {
          display: none;
        }
        .mobile-links {
          display: flex;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .container {
      max-width: 100%;
      padding: 0;
    }
    .header-content {
      grid-template-columns: auto 40px 40px 40px 40px;
      grid-template-areas: "headerLogo headerCreate headerUser headerSearch headerMenu";
      column-gap: 5px;
      border-radius: 0;
      padding: 2px 20px;
      .header-user {
        .user-inner {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          .user-image {
            padding: 0;
            img {
              width: 30px;
              margin: 0;
            }
            h6 {
              display: none;
            }
          }
          .user-list {
            right: 0;
            left: unset;
            top: 58px;
            &::before {
              right: 13px;
              left: unset;
            }
          }
        }
      }
      .header-search {
        .search-input {
          display: none;
        }
        .mobile-search {
          display: block;
        }
      }
      .header-menu {
        .mobile-links .link-list {
          right: 0;
          top: 58px;
          &::before {
            right: 13px;
          }
        }
      }
      .header-create {
        justify-content: center;
        .btn-default {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
  @media (max-width: 460px) {
    .header-content {
      .header-create {
        .create-menu {
          top: 60px;
          right: -75px;
          width: 280px;
        }
      }
    }
  }
  @media (max-width: 390px) {
    .header-content {
      .header-create {
        .create-menu {
          top: 60px;
          right: -145px;
        }
      }
    }
  }
  @media (max-width: 300px) {
    .header-content .header-user .user-inner .user-list {
      right: 50%;
      transform: translateX(50%);
      &::before {
        right: 50%;
        transform: translateX(50%);
      }
    }
  }
`;
