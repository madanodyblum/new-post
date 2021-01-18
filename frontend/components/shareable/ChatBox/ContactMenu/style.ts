import styled from "styled-components";

export const Root = styled.div`
  position: absolute;
  left: -20px;
  top: 50px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
  z-index: 200;
  background-color: #ffffff;
  border-radius: 10px;

  &::before {
    content: "";
    position: absolute;
    right: 40px;
    top: -9px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 7.5px 11px 7.5px;
    border-color: transparent transparent #ffffff transparent;
  }

  ul {
    padding: 5px;

    li {
      a {
        padding: 10px;
        display: block;
        font-size: 14px;
        font-weight: 400;
        border-radius: 5px;
        color: #474747;

        &:hover {
          background-color: rgba(0, 0, 0, 0.1);
        }
      }

      .mdi {
        margin-right: 5px;
        font-size: 20px;
        position: relative;
        top: 2px;
      }
    }
  }
`;
