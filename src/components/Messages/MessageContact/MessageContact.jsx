import React from "react";
import "./MessageContact.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "../Chat/Chat";

function MessageContact(props) {
  return (
    <div className="messageContact__card">
      <div className="messageContact__profileImageContainer">
        <img
          className="messageContact__profileImage"
          src={props.contact.profileImage}
          alt=""
        />
      </div>
      <div className="messageContact__names">
        <p className="messageContact__displayName">
          {props.contact.displayName}
        </p>
        <p className="messageContact__userName">@{props.contact.userName}</p>
      </div>
      <Route exact path="/messages/leommessi" component={Chat} />
    </div>
  );
}

export default MessageContact;
