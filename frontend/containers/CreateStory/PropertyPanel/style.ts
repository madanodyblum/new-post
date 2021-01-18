import styled from "styled-components";
import { IColor } from "@Components/data/baseStyles";

export const Root = styled.div`
  flex: 0 0 350px;
  max-width: 350px;
  height: 100%;

  background-color: ${IColor.white};
  box-shadow: 3px 0 15px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
  padding: 5px 15px;
  box-shadow: 0 3px 10px -3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Logo = styled.img`
  margin-left: 15px;
  width: 50px;
`;

export const Body = styled.div`
  height: calc(100% - 122px);
  overflow-y: auto;
`;

export const Info = styled.div`
  padding: 20px 15px;
  border-bottom: 1px solid ${IColor.borderColor};
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;

  h4 {
    font-size: 24px;
    margin-bottom: 0;
    color: ${IColor.textDark};
  }
`;

export const UserImage = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 45px;
    border-radius: 50%;
  }

  h6 {
    font-size: 16px;
    font-weight: 500;
    margin: 0 0 0 10px;
    color: ${IColor.textGray};
    overflow: hidden;
  }
`;

export const ChooseContainer = styled.div`
  padding: 0 15px;
  margin-bottom: 10px;
`;

export const Line = styled.div`
  margin-top: 15px;
`;

export const AddText = styled.div`
  display: grid;
  grid-template-columns: 40px auto;
  column-gap: 10px;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;

  h6 {
    font-size: 1rem;
    margin-bottom: 0;
    color: ${IColor.textDark};
  }
`;

export const AbIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${IColor.backgroundGray};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  i {
    font-size: 18px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  padding: 10px;
  font-size: 14px;
  font-weight: 400;
  color: #474747;
  resize: none;
`;

export const Select = styled.select`
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
  appearance: none;
  height: 44px;
`;

export const Backgrounds = styled.div`
  border: 1px solid ${IColor.borderColor};
  border-radius: 10px;
  padding: 10px 10px 0 10px;

  .title {
    font-size: 14px;
    font-weight: 500;
    color: ${IColor.textGray};
    padding-left: 10px;
    margin-bottom: 1rem;
  }

  .bg-inner {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .bg-item {
      flex: 0 0 12.5%;
      max-width: 12.5%;
      padding: 3px;
      cursor: pointer;

      img {
        width: 100%;
        border-radius: 50%;
      }
    }

    .active {
      img {
        border: 3px solid ${IColor.blue};
      }
    }
  }

  .load-more {
    margin: 20px 0 10px 0;
    text-align: center;

    button {
      background-color: transparent;
      width: 50px;
      border: none;
      cursor: pointer;
    }
  }
`;

export const Footer = styled.div`
  box-shadow: 0 -3px 10px -3px rgba(0, 0, 0, 0.1);
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;

  Button {
      width: 50%;
      margin: 0 5px;
  }
`;