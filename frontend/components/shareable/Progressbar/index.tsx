import { IProgress } from "@Components/data/styles";
import { ProgressbarStyle } from "./styles";
import React from "react";
const Progressbar = ({ width, color }: IProgress) => {
  return (
    <ProgressbarStyle width={width} color={color}>
      <span></span>
    </ProgressbarStyle>
  );
};
export default React.memo(Progressbar);
