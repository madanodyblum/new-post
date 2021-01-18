import styled from "styled-components";
export const HashtagStyle = styled.div`
  padding: 0 6px;
  font-family: cursive;

  &:not(:first-of-type) {
    border-top: 1px solid black;
  }

  &:hover,
  &.active {
    color: dodgerblue;
  }
`;
export const EditorContainer = styled.div`
  cursor: "text";
  fontsize: 16;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 97%;
  align-items: center;
`;
