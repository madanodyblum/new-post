import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 100;

  .menu-inner {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const TooltipContainer = styled.div`
  .tool-tip {
    display: none;
  }

  &:hover {
    .tool-tip {
      display: block;
    }
  }
`;

export const MoreButton = styled(TooltipContainer)`
  position: relative;
`;

export const IconButton = styled.button`
  background-color: transparent;
  width: 22px;
  height: 22px;
  border: none;
  border-radius: 50%;
  padding: 0;
  margin-right: 0px;
  cursor: pointer;
  margin-right: 2px;

  .mdi {
    font-size: 18px;
    color: #a6a6a6;
  }
`;

export const Tooltip = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  font-size: 12px;
  font-weight: 400;
  color: #ffffff;
  padding: 5px;
  position: absolute;
  bottom: -30px;
  right: 50%;
  transform: translateX(50%);
`;

export const MoreMenu = styled.div`
  background-color: #ffffff;
  -webkit-box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  position: absolute;
  top: -40px;
  left: 0;

  &::before {
    content: "";
    position: absolute;
    left: 5px;
    bottom: -7px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 7px 0 7px;
    border-color: #ffffff transparent transparent transparent;
  }

  ul {
    display: flex;
    align-items: center;

    li {
      font-size: 13px;
      font-weight: 400;
      padding: 5px;
      cursor: pointer;
    }
  }
`;

export const ReplyButton = styled(TooltipContainer)`
  position: relative;
`;

export const ReactButton = styled(TooltipContainer)`
  position: relative;
`;

export const ReactMenu = styled.div`
  background-color: #ffffff;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  position: absolute;
  top: -40px;
  left: -35px;

  &::before {
    content: "";
    position: absolute;
    left: 40px;
    bottom: -7px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 7px 0 7px;
    border-color: #ffffff transparent transparent transparent;
  }
  ul {
    display: flex;
    align-items: center;

    li {
      padding: 3px;
      cursor: pointer;

      &:hover {
        img {
          transform: scale(0.9);
        }
      }
      img {
        width: 24px;
        padding: 2px;
      }
    }
  }
`;
