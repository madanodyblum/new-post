import styled from "styled-components";

export const Root = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: #474747;
  padding: 10px 30px 10px 10px;
  position: relative;
  border-top: 1px solid #e4e4e4;
`;

export const CloseButton = styled.div`
  width: 25px;
  height: 25px;
  padding: 0;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  cursor: pointer;

  .mdi {
    font-size: 18px;
    color: #a6a6a6;
  }
`;

export const Text = styled.span`
  overflow: hidden;
  font-size: 13px;
  font-weight: 400;
  color: #474747;
  padding: 10px 30px 1;
`;
