import ContactList from "@Components/shareable/Messenger/ContactList";
import { MessengerContacts } from "mocks";
import React from "react";
import { Root, TitleBar, BlueButton, Container, Title } from "./style";

const FriendsCard = () => {
  return (
    <Root>
      <TitleBar>
        <Title>Friends</Title>
        <BlueButton className="btn btn-link-text">See All Friends</BlueButton>
      </TitleBar>
      <Container>
        <ContactList contacts={MessengerContacts} />
      </Container>
    </Root>
  );
};

export default FriendsCard;
