import React, { useCallback, useState } from "react";
import {
  Root,
  MoreButton,
  IconButton,
  Tooltip,
  MoreMenu,
  ReplyButton,
  ReactButton,
  ReactMenu,
} from "./style";

type Props = {
  onReply: () => void;
};

const MsgMenu: React.FC<Props> = (props: Props) => {
  const { onReply } = props;

  const [showMoreMenu, setShowMoreMenu] = useState<boolean>(false);
  const [showReactMenu, setShowReactMenu] = useState<boolean>(false);

  const handleMoreButton = useCallback(() => {
    setShowMoreMenu(!showMoreMenu);
  }, [showMoreMenu]);

  const handleReactButton = useCallback(() => {
    setShowReactMenu(!showReactMenu);
  }, [showReactMenu]);

  return (
    <Root className="msg-menu">
      <div className="menu-inner">
        <MoreButton>
          <IconButton onClick={handleMoreButton}>
            <i className="mdi mdi-dots-vertical"></i>
          </IconButton>
          <Tooltip className="tool-tip">More</Tooltip>
          {showMoreMenu && (
            <MoreMenu>
              <ul>
                <li>Delete</li>
                <li>Forward</li>
              </ul>
            </MoreMenu>
          )}
        </MoreButton>
        <ReplyButton>
          <IconButton onClick={onReply}>
            <i className="mdi mdi-reply"></i>
          </IconButton>
          <Tooltip className="tool-tip">Reply</Tooltip>
        </ReplyButton>
        <ReactButton>
          <IconButton onClick={handleReactButton}>
            <i className="mdi mdi-emoticon-happy-outline"></i>
          </IconButton>
          <Tooltip className="tool-tip">React</Tooltip>
          {showReactMenu && (
            <ReactMenu>
              <ul>
                <li>
                  <img src="images/emotion/1.png" alt="em" />
                </li>
                <li>
                  <img src="images/emotion/2.png" alt="em" />
                </li>
                <li>
                  <img src="images/emotion/3.png" alt="em" />
                </li>
                <li>
                  <img src="images/emotion/4.png" alt="em" />
                </li>
                <li>
                  <img src="images/emotion/5.png" alt="em" />
                </li>
                <li>
                  <img src="images/emotion/6.png" alt="em" />
                </li>
                <li>
                  <img src="images/emotion/7.png" alt="em" />
                </li>
              </ul>
            </ReactMenu>
          )}
        </ReactButton>
      </div>
    </Root>
  );
};

export default MsgMenu;
