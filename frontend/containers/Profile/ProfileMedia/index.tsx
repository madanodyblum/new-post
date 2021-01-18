import Tab from "@Components/shareable/Tab";
import { MEDIA_TABS } from "@Constants/consts";
import React, { useCallback, useState } from "react";
import Photos from "./Photos";
import { Root, Title, TabBar, Body } from "./style";

const ProfileMedia = () => {
  const [selectedTab, setSelectedTab] = useState("id-photos");

  const handleTab = useCallback(
    (tabId) => () => {
      setSelectedTab(tabId);
    },
    []
  );
  return (
    <Root>
      <Title>All Media</Title>
      <TabBar>
        {MEDIA_TABS?.map((tab) => {
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
      <Body>{selectedTab === "id-photos" && <Photos />}</Body>
    </Root>
  );
};

export default ProfileMedia;
