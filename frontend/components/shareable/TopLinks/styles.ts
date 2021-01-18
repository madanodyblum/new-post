import styled from "styled-components";
export const TopLinksContainer = styled.div`
  margin: 110px 0 35px 0;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      margin: 0 15px;
      a {
        font-size: 14px;
        font-weight: 500;
        display: block;
        color: $textGray;
        .mdi {
          font-size: 18px;
          position: relative;
          top: 2px;
          margin-right: 5px;
        }
        &:hover {
          color: $blue;
        }
      }
    }
  }
  @media (max-width: 500px) {
    display: none;
  }
`;
