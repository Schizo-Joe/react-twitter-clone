import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Messages.css";
import MessageContact from "./MessageContact/MessageContact";
import SearchIcon from "@material-ui/icons/Search";
import AddCommentOutlinedIcon from "@material-ui/icons/AddCommentOutlined";
import firebaseApp from "../../Firebase";
import Chat from "./Chat/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Messages() {
  const db = firebaseApp.firestore();
  const [newChatPageStatus, setNewChatPageStatus] = useState(false);
  const [chatSearchValue, setChatSearchValue] = useState("");
  const [contactSearchValue, setContactSearchValue] = useState("");
  const [contacts, setContacts] = useState([]);

  const newChatPageStatushandler = () => {
    setNewChatPageStatus(newChatPageStatus ? false : true);
  };

  useEffect(() => {
    db.collection("users")
      .where("userName", "==", contactSearchValue)
      .onSnapshot((snapshot) =>
        setContacts(snapshot.docs.map((doc) => doc.data()))
      );
    console.log(contacts);
    // console.log(contactSearchValue);
    // db.collection("users")
    //   .where("displayName", "==", contactSearchValue)
    //   .get()
    //   .then(function (querySnapshot) {
    //     querySnapshot.forEach(function (doc) {
    //       userDetails = doc.data();
    //     });
    //     currentUserDetails.name = userDetails.displayName;
    //     currentUserDetails.email = userDetails.email;
    //     currentUserDetails.userName = userDetails.userName;
    //     currentUserDetails.verified = userDetails.verified;
    //     currentUserDetails.profileImage = userDetails.profileImage;
    //     console.log(currentUserDetails);
    //     console.log(email);
    //   });
  }, [contactSearchValue]);

  return (
    <Router>
      <div className="messagesPage">
        <div className="messagesPage__title">
          <h2 className="messagesPage__titleText">Messages</h2>
          <AddCommentOutlinedIcon
            onClick={newChatPageStatushandler}
            className="messagePage__newMessageIcon"
          />
        </div>

        {!newChatPageStatus && (
          <div className="messagesPage__existingChats">
            <div className="messagePage__searchBar">
              <SearchIcon className="messagePage__searchIcon" />
              <input
                className="messagePage__searchBox"
                value={chatSearchValue}
                onChange={(e) => setChatSearchValue(e.target.value)}
                type="text"
              />
            </div>
          </div>
        )}
        {newChatPageStatus && (
          <div className="messagePage__newChat">
            <div className="messagePage__searchBar">
              <SearchIcon className="messagePage__searchIcon" />
              <input
                className="messagePage__searchBox"
                value={contactSearchValue}
                onChange={(e) => setContactSearchValue(e.target.value)}
                type="text"
                placeholder="Name"
              />
            </div>
            {contacts.map((contact) => (
              <Link to={`/messages/${contact.userName}`}>
                <MessageContact contact={contact} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </Router>
  );
}

export default Messages;
