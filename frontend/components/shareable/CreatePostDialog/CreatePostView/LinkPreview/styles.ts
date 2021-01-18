import styled from "styled-components";
export const LinkPreviewContainer = styled.div`
  display: flex;
  border-radius: 15px;
  border: #c8c7cc solid 2.5px;
  .image {
    img {
      border-bottom-left-radius: 15px;
      border-top-left-radius: 15px;
    }
  }
  .buttons {
    position: absolute;
    right: 0;
    top: 10px;
    display: block;
    z-index: 50;
    padding: 0 10px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    .btn-delete-link {
      background-color: #dfe0e2;
      border-radius: 50%;
      width: 36px;

      height: 36px;
      border: none;
      cursor: pointer;
      z-index: 50;
    }
  }
  .data {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: #f2f3f5;
    padding: 13px;
    display: flex;
    flex-direction: column;
    .site-name {
      color: #a0a0a0;
      font-size: 16px;
      margin-bottom: 5px;
    }
    .title {
      font-size: 18px;
      margin-bottom: 5px;
      font-weight: 650;
    }
    .description {
      margin-bottom: 5px;
      font-size: 12px;
    }
  }
`;
