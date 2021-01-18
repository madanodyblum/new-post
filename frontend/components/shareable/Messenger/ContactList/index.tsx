import React from "react";
import ContactListItem from "@Components/shareable/ContactListItem";

const ContactList = ({ contacts }) => {
  return (
    <div>
      {contacts?.map((contact) => {
        return (
          <div style={{ marginBottom: 5 }}>
            <ContactListItem
              avatar={contact.avatar}
              name={contact.name}
              badge={contact.badge}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ContactList;
