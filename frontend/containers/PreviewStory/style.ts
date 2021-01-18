import styled from "styled-components";
import { IColor } from "@Components/data/baseStyles";
import { Button } from "@Components/shareable/ButtonsStyles";

export const Root = styled.div`
position: fixed;
left: 0;
top: 0;
width: 100%;
height: 100%;
background-color: #262626;
z-index: 2000;
`;

export const Blur = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
background-color: black;
opacity: 1;
z-index: -1;
display: flex;
align-items: center;
align-content: center;
justify-content: center;
filter: blur(30px);

img {
  width: 100%;
  transform: scale(1.2);
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
`;

export const Content = styled.div`
width: 25%;
height: 100vh;
margin: 0 auto;
`;

export const Header = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding-top: 26px;
`;

export const UserInfo = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;

img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
`;

export const UserName = styled.div`
padding-left: 10px;

h6 {
  font-size: 13px;
  margin-bottom: 2px;
  color: #ffffff;
  overflow: hidden;
}

span {
  font-size: 13px;
  color: ${IColor.textLight};
}
`;

export const StoryMenu = styled.div`
position: relative;
`;

export const MenuButton = styled(Button)`
border: none;
width: 35px;
height: 35px;
padding: 0.5rem 0;
background-color: transparent;

.mdi {
  font-size: 24px;
  color: ${IColor.white};
  position: relative;
  top: -3px;
}
`;

export const StoryBody = styled.div`
position: relative;
height: calc(100% - 110px);
background-color: rgba(0, 0, 0, 0.4);
border-radius: 10px;
`;

export const CloseButton = styled(Button)`
background-color: transparent;
position: absolute;
right: -40px;
top: 0;
z-index: 50;
padding: 0.5rem 0;
width: 35px;
height: 35px;

.mdi {
  font-size: 24px;
  color: ${IColor.white};
}
`;

export const Preview = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100%;
overflow: hidden;
border-radius: 10px;
position: relative;

img {
  width: 100%;
  border-radius: 10px;
}
`;

export const LinkContent = styled.div`
position: absolute;
padding: 10px;
text-align: center;
transition: all 0.2s ease;
bottom: 0px;
width: 100%;
`;

export const LinkButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

span {
  font-size: 12px;
  font-weight: 500;
  color: ${IColor.white};
}
`;

export const DropButton = styled(Button)`
background-color: transparent;
border: none;
width: 35px;
height: 35px;
cursor: pointer;
padding: 0;
transition: all 0.2s ease;
margin: 0;

.mdi {
  font-size: 24px;
  color: #ffffff;
}
`;

export const CircleButton = styled(Button)`
position: absolute;
top: 50%;
transform: translateY(-50%);
width: 40px;
height: 40px;
background-color: rgba(255, 255, 255, 0.5);
border-radius: 50%;
border: none;
cursor: pointer;
padding: 0;

&:hover {
  background-color: rgba(255, 255, 255, 0.8);
  transition: all 0.2s linear;
}
.mdi {
  font-size: 24px;
  color: ${IColor.textGray};
}
`;

export const PrevButton = styled(CircleButton)`
left: -60px;
transition: all 0.2s linear;

&:hover {
  left: -63px;
}
`;

export const NextButton = styled(CircleButton)`
right: -60px;
transition: all 0.2s linear;

&:hover {
  right: -63px;
}
`;

export const LinkUrl = styled.div`
background-color: rgba(0, 0, 0, 0.5);
padding: 10px;
border-radius: 10px;
margin-top: 10px;

a {
  display: -webkit-box;
  overflow: hidden;
  font-size: 13px;
  font-weight: 400;
  color: #ffffff;
}
`;