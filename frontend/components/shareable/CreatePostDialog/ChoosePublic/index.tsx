import React, { useState } from "react";
import { Root, Header, Body, CustomRadio, RadioBox } from "./style";

const PRIVACY = [
  {
    id: "id-public",
    image: "mdi mdi-earth",
    title: "Public",
    subTitle: "Anyone on or off NewsLix",
  },
  {
    id: "id-friends",
    image: "mdi mdi-account-multiple",
    title: "Friends",
    subTitle: "Your friends on NewsLix",
  },
  {
    id: "id-public2",
    image: "mdi mdi-earth",
    title: "Public",
    subTitle: "Anyone on or off NewsLix",
  },
];

type Props = {
  active?: boolean;
  onBack?: () => void;
  independent?: boolean;
};

const ChoosePublic: React.FC<Props> = (props: Props) => {
  const { active, onBack = () => {}, independent = false } = props;

  const [selectedPrivacy, setPrivacy] = useState("");

  return (
    <Root active={active} independent={independent}>
      <Header>
        <span className="back" onClick={onBack}>
          <i className="mdi mdi-arrow-left"></i>
        </span>
        <h2>Select Privacy</h2>
      </Header>
      <Body>
        <div className="msg-title">Who can see your post?</div>
        <div className="msg-desc">
          Your post will show up in News Feed, on your profile and in search
          results.
        </div>
        <div className="radio-group">
          {PRIVACY?.map((p) => {
            return (
              <CustomRadio
                key={p.id}
                selected={p.id === selectedPrivacy}
                onClick={() => setPrivacy(p.id)}
              >
                <div className="radio-image">
                  <i className={p.image}></i>
                </div>
                <div className="radio-text">
                  <h6>{p.title}</h6>
                  <span>{p.subTitle}</span>
                </div>
                <RadioBox selected={p.id === selectedPrivacy} />
              </CustomRadio>
            );
          })}
        </div>
      </Body>
    </Root>
  );
};

export default ChoosePublic;
