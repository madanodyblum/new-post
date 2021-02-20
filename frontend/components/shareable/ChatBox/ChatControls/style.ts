import styled from "styled-components";

export const Root = styled.div`
  display: grid;
  grid-template-columns: 32px auto 32px;
  column-gap: 5px;
  align-items: center;
`;

export const AttachButton = styled.button`
  background-color: transparent;
  color: #2680eb;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  padding: 0;
  cursor: pointer;

  .mdi {
    font-size: 22px;
  }
`;

export const InputContainer = styled.div`
  position: relative;

  input {
    width: 100%;
    border: none;
    border-radius: 40px;
    background-color: #f5f5f5;
    padding: 10px 15px;
    font-size: 14px;
    font-weight: 400;
    height: 36px;
  }
`;

export const HappyIcon = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: #2680eb;
  cursor: pointer;
`;

export const LikeButton = styled.button`
  background-color: transparent;
  color: #2680eb;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  padding: 0;
  cursor: pointer;

  .mdi {
    font-size: 22px;
  }
`;