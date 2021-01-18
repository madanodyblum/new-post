import { ABOUT_LIST } from "@Constants/AboutList";
import React, { useState, useCallback } from "react";
import OverView from "./OverView";
import {
  Root,
  AboutTab,
  AboutTitle,
  List,
  ListItem,
  AboutContent,
} from "./style";

const ProfileAbout = () => {
  const [selectedTab, setSelectedTab] = useState("id-overview");

  const handleListItem = useCallback(
    (id) => () => {
      setSelectedTab(id);
    },
    []
  );

  return (
    <Root>
      <AboutTab>
        <AboutTitle>About</AboutTitle>
        <List>
          {ABOUT_LIST?.map((item, index) => {
            return (
              <ListItem
                key={item.id}
                onClick={handleListItem(item.id)}
                selected={selectedTab === item.id}
              >
                {item.text}
              </ListItem>
            );
          })}
        </List>
      </AboutTab>
      <AboutContent>
        {selectedTab === "id-overview" && <OverView />}
      </AboutContent>
    </Root>
  );
};

export default ProfileAbout;
