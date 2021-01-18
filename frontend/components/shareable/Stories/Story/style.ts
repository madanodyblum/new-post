import styled from "styled-components";

export const Root = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
`;

export const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border 2px solid #FFFFFF;
`;

export const AvatarAnimation = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 60px;
height: 60px;
border-radius: 50%;
background: linear-gradient(45deg, #2680eb 0%, #ff6262 100%);
animation: rotate 1s linear infinite;
`;

export const Title = styled.span`
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
width: 60px;
font-size: 12px;
font-weight: 500;
margin-top: 10px;
color: #474747;
margin-top: 10px;
`;
