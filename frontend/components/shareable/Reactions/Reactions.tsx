import useHover from "@Hooks/useHover";
import React from "react";
import { ReactionsStyles } from "./styles";

type Props = {
  show: boolean;
}

const Reactions: React.FC<Props> = ({ show }: Props) => {
  return (
    <ReactionsStyles show={show}>
      <ul>
        <li className="emo-item">
          <span className="emo-name">Like</span>
          <img src="/images/emotion/1.gif" alt="emotion-name" />
        </li>
        <li className="emo-item">
          <span className="emo-name">Love</span>
          <img src="/images/emotion/2.gif" alt="emotion-name" />
        </li>
        <li className="emo-item">
          <span className="emo-name">Haha</span>
          <img src="/images/emotion/3.gif" alt="emotion-name" />
        </li>
        <li className="emo-item">
          <span className="emo-name">Wow</span>
          <img src="/images/emotion/4.gif" alt="emotion-name" />
        </li>
        <li className="emo-item">
          <span className="emo-name">Sad</span>
          <img src="/images/emotion/5.gif" alt="emotion-name" />
        </li>
        <li className="emo-item">
          <span className="emo-name">Angry</span>
          <img src="/images/emotion/6.gif" alt="emotion-name" />
        </li>
      </ul>
    </ReactionsStyles>
  );
};

export default Reactions;
