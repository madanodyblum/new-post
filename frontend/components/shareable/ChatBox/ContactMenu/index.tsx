import React from "react";
import { Root } from "./style";

const ContactMenu = () => {
  return (
    <Root>
      <ul>
        <li>
          <a href="#">
            <i className="mdi mdi-account-circle-outline"></i>View Page
          </a>
        </li>
        <li>
          <a href="#">
            <i className="mdi mdi-bell-outline"></i>Mute notifications
          </a>
        </li>
        <li>
          <a href="#">
            <i className="mdi mdi-message-processing-outline"></i>Turn off
            messages
          </a>
        </li>
        <li>
          <a href="#">
            <i className="mdi mdi-trash-can-outline"></i>Delete conversation
          </a>
        </li>
      </ul>
    </Root>
  );
};

export default ContactMenu;
