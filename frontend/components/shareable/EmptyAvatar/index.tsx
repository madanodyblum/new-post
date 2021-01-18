import { IColor } from "@Components/data/baseStyles";
import React from "react";
import styled from "styled-components";

const Root = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid #d5d5d5;
  border-radius: 50%;
  color: ${IColor.textLight};
`;

const EmptyAvatar = () => {
  return (
    <Root>
      <i className="mdi mdi-pound" />
    </Root>
  );
};

export default EmptyAvatar;
