import styled from "styled-components";
import { IColor } from "@Components/data/baseStyles";

export const AuthContainer = styled.div`
  height: 100vh;
`;

export const Slogan = styled.div`
  .inner {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .logo {
      img {
        width: 120px;
      }
    }
    .slogan {
      text-align: center;
      margin-top: 30px;
      h2 {
        font-size: 32px;
        text-transform: uppercase;
        font-weight: 900;
        color: ${IColor.textDark};
      }
      h6 {
        margin-bottom: 0;
        font-size: 23px;
        font-weight: 400;
        letter-spacing: 5px;
        color: ${IColor.textGray};
      }
    }
  }

  @media (max-width: 992px) {
    padding: 30px 0 20px 0;
  }

  @media (max-width: 575px) {
    .inner {
      .slogan {
        h2 {
          font-size: 24px;
          font-weight: 900;
        }
        h6 {
          font-size: 14px;
        }
      }
    }
  }
`;

// sign in content
export const SignInContent = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  height: 100%;
  @media (max-width: 992px) {
    grid-template-columns: auto !important;
  }
  @media (max-width: 1199px) {
    grid-template-columns: 50% 50%;
  }
`;

// signIN/singUp
export const SignForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgb(245, 245, 245);
  background: -webkit-linear-gradient(
    left,
    rgba(245, 245, 245, 1) 0%,
    rgba(245, 245, 245, 1) 50%,
    rgba(38, 128, 235, 1) 50%,
    rgba(38, 128, 235, 1) 100%
  );
  background: linear-gradient(
    to right,
    rgba(245, 245, 245, 1) 0%,
    rgba(245, 245, 245, 1) 50%,
    rgba(38, 128, 235, 1) 50%,
    rgba(38, 128, 235, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f5f5f5', endColorstr='#2680eb',GradientType=1 );
  .sign-body {
    display: block;
    background-color: ${IColor.white};
    border: 1px solid ${IColor.borderColor};
    border-radius: 15px;
    padding: 15px;
    position: relative;
    width: 400px;
    .title {
      padding: 10px 0 20px 0;
      font-size: 18px;
      font-weight: 500;
      text-align: center;
      color: ${IColor.textGray};
    }
    .column-item {
      width: 100%;
      margin-bottom: 15px;
      &.d-flex {
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
      h6 {
        margin-bottom: 0;
        color: ${IColor.textGray};
        margin-right: 15px;
      }
      .input-group {
        position: relative;
        .icon {
          position: absolute;
          left: 0;
          top: 0;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          .mdi {
            font-size: 22px;
            color: ${IColor.textLight};
          }
        }
        .my-input {
          width: 100%;
          border: 1px solid ${IColor.borderColor};
          border-radius: 5px;
          height: 38px;
          padding: 8px 8px 8px 45px;
          background-color: ${IColor.white};
          color: ${IColor.textGray};
          font-size: 14px;
          transition: all 0.2s ease;
          &:hover,
          &:focus {
            border-color: ${IColor.blue};
            transition: all 0.2s ease;
          }
        }
        .validation-msg {
          display: none;
        }
      }
      .term {
        margin-left: 30px;
        font-size: 14px;
        font-weight: 400;
        color: ${IColor.textGray};
        a {
          color: ${IColor.blue};
          margin: 0 3px;
        }
      }
    }
    .button-sign {
      .btn-default {
        width: 100%;
        .mdi {
          position: relative;
          top: 2px;
          margin-left: 5px;
        }
      }
    }
    .login {
      padding: 20px 0 10px 0;
      .text {
        font-size: 14px;
        font-weight: 400;
        color: ${IColor.textLight};
        a {
          margin-left: 5px;
          color: ${IColor.blue};
        }
      }
    }
  }
  .sign-bio {
    display: none;
    background-color: ${IColor.white};
    border: 1px solid ${IColor.borderColor};
    border-radius: 15px;
    padding: 15px;
    position: relative;
    width: 400px;
    &.active {
      display: block;
    }
    .title {
      padding: 10px 0 20px 0;
      font-size: 18px;
      font-weight: 500;
      text-align: center;
      color: ${IColor.textGray};
    }
    .upload-image {
      height: 120px;
      .inner {
        text-align: center;
        width: 100px;
        margin: 0 auto;
        position: relative;
        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }
        .btn-upload {
          width: 35px;
          height: 35px;
          position: absolute;
          right: 0;
          bottom: -5px;
          border-radius: 50%;
          border: 3px solid ${IColor.white};
          background-color: ${IColor.backgroundDark};
          color: ${IColor.textGray};
          cursor: pointer;
        }
      }
    }
    .bio {
      margin: 15px 0;
      .textarea {
        width: 100%;
        resize: vertical;
        font-size: 14px;
        font-weight: 400;
        color: ${IColor.textGray};
        border: 1px solid ${IColor.borderColor};
        border-radius: 5px;
        padding: 8px;
        transition: all 0.2s ease;
        &:hover,
        &:focus {
          border-color: ${IColor.blue};
          transition: all 0.2s ease;
        }
      }
    }
    .date {
      .my-input {
        width: 100%;
        border: 1px solid ${IColor.borderColor};
        border-radius: 5px;
        height: 38px;
        padding: 8px;
        background-color: ${IColor.white};
        color: ${IColor.textGray};
        font-size: 14px;
        transition: all 0.2s ease;
        &:hover,
        &:focus {
          border-color: ${IColor.blue};
          transition: all 0.2s ease;
        }
      }
    }
    .button-sign {
      margin-top: 20px;
      .btn-default {
        width: 100%;
      }
    }
  }

  @media (max-width: 992px) {
    background: transparent;
    padding: 20px 0 40px 0;
  }
  @media (max-width: 575px) {
    .sign-body {
      width: 95%;
    }
    .sign-bio {
      width: 95%;
    }
  }
`;
