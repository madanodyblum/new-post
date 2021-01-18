import styled from "styled-components";

export const Root = styled.div`
  .communications {
    display: grid;
    grid-template-columns: 100px auto;
    grid-template-areas: "cmList cmBody";
    position: relative;

    .communications-list {
      grid-area: cmList;
      background-color: #e4e4e4;
      border-radius: 10px 0 0 10px;
      padding: 30px 0 30px 15px;
    }

    .communications-body {
      grid-area: cmBody;
      background-color: #ffffff;
      border: 1px solid #e4e4e4;
      border-left-width: 0px;
      border-radius: 0 10px 10px 0;
      padding: 15px;
    }
  }
`;

export const Hr = styled.div`
  border: none;
  border-top: 1px solid rgba(166, 166, 166, 0.7);
  position: relative;
  margin: 8px 0;
`;