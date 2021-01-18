import styled from "styled-components";
import { IColor } from "@Components/data/baseStyles";

export const ErrorMessageValidation = styled.div`
  display: ${({ display }: { display: boolean }) =>
    display ? "block" : "none"};
  position: absolute;
  right: 24px;
  bottom: -50px;
  background-color: #ff4e4e;
  padding: 10px;
  font-size: 13px;
  font-weight: 500;
  color: ${IColor.white};
  border-radius: 3px;
  z-index: 100;
  &::before {
    content: "";
    position: absolute;
    top: -8px;
    right: 20px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 7.5px 10px 7.5px;
    border-color: transparent transparent #ff4e4e transparent;
  }
`;

export const CustomSelect = styled.select`
  display: inline-block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.5rem 1.75rem 0.5rem 0.75rem;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  color: #474747;
  vertical-align: middle;
  background: #ffffff
    url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzZBNkE2QSI+PHBhdGggZD0iTTcuNDEsOC41OEwxMiwxMy4xN0wxNi41OSw4LjU4TDE4LDEwTDEyLDE2TDYsMTBMNy40MSw4LjU4WiIgLz48L3N2Zz4=)
    no-repeat right 0.75rem center/24px 30px;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  height: 44px;
`;

export const MainContent = styled.div`
  position: relative;
  margin-top: 120px;
  .main-inner {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    .left-side {
      flex: 0 0 28%;
      max-width: 28%;
      margin-bottom: 40px;
    }
    .center-feeds {
      padding: 0 20px;
      flex: 0 0 44%;
      max-width: 44%;
    }
    .right-side {
      flex: 0 0 28%;
      max-width: 28%;
    }
    .side-body {
      margin-bottom: 35px;
    }
    .feeds-title {
      margin-bottom: 15px;
      .title {
        font-size: 20px;
        font-weight: 600;
        &.blue {
          .mdi {
            color: ${IColor.blue};
          }
        }
        &.pink {
          .mdi {
            color: ${IColor.pink};
          }
        }
        &.orange {
          .mdi {
            color: ${IColor.orange};
          }
        }
        &.center {
          text-align: center;
          .mdi {
            margin: 0 5px 0 0;
          }
        }
        .mdi {
          font-size: 22px;
          margin-left: 5px;
          position: relative;
          top: 2px;
        }
      }
    }
  }

  .sticky {
    position: sticky;
    top: 90px;
    z-index: 1500;
  }

  @media (max-width: 1199px) {
    .main-inner {
      .left-side {
        display: none;
      }
      .right-side {
        flex: 0 0 40%;
        max-width: 40%;
      }
      .center-feeds {
        flex: 0 0 60%;
        max-width: 60%;
        padding-left: 0;
      }
    }
  }
  @media (max-width: 992px) {
    .main-inner {
      .right-side {
        flex: 0 0 100%;
        max-width: 100%;
        order: 1;
        &.sticky {
          position: unset;
          top: unset;
        }
      }
      .center-feeds {
        padding: 0;
        flex: 0 0 100%;
        max-width: 100%;
        order: 2;
      }
    }
    .hidden-small {
      display: none;
    }
  }
`;
