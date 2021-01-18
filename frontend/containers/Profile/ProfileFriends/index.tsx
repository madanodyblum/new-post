import Tab from "@Components/shareable/Tab";
import { FRIENDS_TABS } from "@Constants/consts";
import React, { useCallback, useState } from "react";
import FollowingList from "./Following";
import { Root, Title, TabBar, Body } from "./style";

const ProfileFriends = () => {
  const [selectedTab, setSelectedTab] = useState("id-following");

  const handleTab = useCallback(
    (tabId) => () => {
      setSelectedTab(tabId);
    },
    []
  );

  return (
    <Root>
      <Title>Friends</Title>
      <TabBar>
        {FRIENDS_TABS?.map((tab) => {
          return (
            <Tab
              key={tab.id}
              style={{ padding: 15 }}
              onClick={handleTab(tab.id)}
              selected={selectedTab === tab.id}
            >
              {tab.name}
            </Tab>
          );
        })}
      </TabBar>
      <Body>{selectedTab === "id-following" && <FollowingList />}</Body>
    </Root>
  );
};

export default ProfileFriends;
