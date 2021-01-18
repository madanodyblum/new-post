import styled from "styled-components";

export const Root = styled.div``;

export const Card = styled.div`
  background-color: #fff;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  overflow: hidden;
  padding: 20px 0;
  position: relative;
`;

export const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  background-color: rgba(255, 255, 255, 0.9);
  color: #060606;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

export const LeftArrow = styled(Arrow)`
  left: 5px;
`;

export const RightArrow = styled(Arrow)`
  right: 5px;
`;

export const StoryContainer = styled.div`
  display: flex;
  padding: 0 30px;
`;
