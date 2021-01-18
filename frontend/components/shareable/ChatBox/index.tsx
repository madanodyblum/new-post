import React, { useCallback, useState } from "react";
import ChatControl from "./ChatControls";
import ChatReply from "./ChatReply";
import ContactMenu from "./ContactMenu";
import MsgMenu from "./MsgMenu";
import {
  Root,
  ChatContent,
  ChatHeader,
  CloseButton,
  ChatBody,
  MsgSent,
  MsgReceived,
  ChatFooter,
} from "./style";

const ChatBox = () => {
  const [replyOn, setReplyOn] = useState(false);
  const [showContactMenu, setContactMenu] = useState(false);

  const handleReply = useCallback(() => {
    setReplyOn(!replyOn);
  }, [replyOn]);

  const handleContact = useCallback(() => {
    setContactMenu(!showContactMenu);
  }, [showContactMenu]);

  return (
    <Root>
      <ChatContent>
        <ChatHeader>
          <div className="chat-contact-info" onClick={handleContact}>
            <div className="user-img">
              <img src="images/user-img/user-img-4.png" alt="user-name" />
            </div>
            <div className="user-name">
              Delara Nazary<i className="mdi mdi-chevron-down"></i>
            </div>
          </div>
          <CloseButton>
            <i className="mdi mdi-close" />
          </CloseButton>
          {showContactMenu && <ContactMenu />}
        </ChatHeader>
        <ChatBody replyOn={replyOn}>
          <div className="date">Oct 17, 2020, 2:24 PM</div>
          <MsgSent>
            <MsgMenu onReply={handleReply} />
            <div className="msg-text">
              <div className="text">
                round solve dust tell carbon silk actually first mathematics
                tiny slip exact run spider history white lay combination nine
                pipe won library applied shake
                <div className="msg-date">18:69 PM</div>
                <div className="msg-reaction">
                  <img src="images/emotion/msg-react-1.png" alt="emo-name" />
                  <span>1</span>
                </div>
              </div>
            </div>
            <div className="msg-status time"></div>
          </MsgSent>
          <MsgSent>
            <MsgMenu onReply={handleReply} />
            <div className="msg-text">
              <div className="text">
                Receive Message
                <div className="msg-date">18:69 PM</div>
                <div className="msg-reaction">
                  <img src="images/emotion/msg-react-2.png" alt="emo-name" />
                  <span>1</span>
                </div>
              </div>
            </div>
            <div className="msg-status receive"></div>
          </MsgSent>
          <MsgSent>
            <MsgMenu onReply={handleReply} />
            <div className="msg-text">
              <div className="text">
                Read Message
                <div className="msg-date">18:69 PM</div>
              </div>
            </div>
            <div className="msg-status read"></div>
          </MsgSent>
          <MsgReceived>
            <div className="msg-user-image">
              <img src="images/user-img/user-img-1.png" alt="user-name" />
            </div>
            <div className="msg-text">
              <div className="text">
                Receive Message from User and
                <div className="msg-date">18:69 PM</div>
                <div className="msg-reaction">
                  <img src="images/emotion/msg-react-3.png" alt="emo-name" />
                  <span>1</span>
                </div>
              </div>
            </div>
            <MsgMenu onReply={handleReply} />
          </MsgReceived>
          <MsgSent>
            <MsgMenu onReply={handleReply} />
            <div className="msg-text">
              <div className="image">
                <img
                  src="images/emotion/emo-1.png"
                  className="msg-image"
                  alt="emo-name"
                />
                <div className="msg-date">18:69 PM</div>
                <div className="msg-reaction">
                  <img src="images/emotion/msg-react-3.png" alt="emo-name" />
                  <span>1</span>
                </div>
              </div>
            </div>
            <div className="msg-status read"></div>
          </MsgSent>
        </ChatBody>
        <ChatFooter>
          {replyOn && (
            <ChatReply
              text="than nearer spend told fill time hour college lungs lady love paint needle whistle upper"
              onClose={() => {
                setReplyOn(false);
              }}
            />
          )}
          <ChatControl />
        </ChatFooter>
      </ChatContent>
    </Root>
  );
};

export default ChatBox;
