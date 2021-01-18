import React, { useState, useCallback } from "react";
import MessengerTab from "./MessengerTab";
import ContactList from "./ContactList";
import { MessengerContacts } from "mocks";
import { Root, Hr } from "./style";

const MESSENGEER_TABS = [
  {
    id: "message",
    title: "Message",
    iconClass: "mdi mdi-chat-processing",
  },
  {
    id: "groups",
    title: "Groups",
    iconClass: "mdi mdi-account-group-outline",
  },
  {
    id: "saved",
    title: "Saved",
    iconClass: "mdi mdi-bookmark-outline",
  },
  {
    id: "picked",
    title: "Picked",
    iconClass: "mdi mdi-dots-horizontal-circle-outline",
  },
  {
    id: "h-divider",
    type: "divider",
  },
  {
    id: "security",
    title: "Security",
    iconClass: "mdi mdi-shield-outline",
  },
  {
    id: "settings",
    title: "Settings",
    iconClass: "mdi mdi-cog-outline",
  },
];

const Messenger = () => {
  const [selectedTab, setSelectedTab] = useState("message");

  const handleTab = useCallback(
    (tabId) => () => {
      setSelectedTab(tabId);
    },
    []
  );

  return (
    <Root>
      <div className="feeds-title">
        <h2 className="title center">
          <i className="mdi mdi-chat-processing" />
          Messenger
        </h2>
      </div>
      <div className="inner">
        <div className="communications">
          <div className="communications-list">
            {MESSENGEER_TABS?.map((tab) => {
              if (tab.type === "divider") {
                return <Hr />;
              }
              return (
                <MessengerTab
                  key={tab.id}
                  title={tab.title}
                  active={selectedTab === tab.id}
                  iconClass={tab.iconClass}
                  onClick={handleTab(tab.id)}
                />
              );
            })}
          </div>
          <div className="communications-body">
            <ContactList
              contacts={selectedTab === "message" ? MessengerContacts : []}
            />
          </div>
        </div>
      </div>
    </Root>
  );
};

export default Messenger;
