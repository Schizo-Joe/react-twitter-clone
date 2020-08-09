import React, { useState } from "react";
import "./TweetBox.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import ScheduleIcon from "@material-ui/icons/Schedule";
import db from "../../Firebase";

function TweetBox() {
  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Cristiano Ronaldo",
      userName: "cristiano",
      verified: true,
      postContent: tweetMessage,
      postMedia: "https://media.giphy.com/media/iDJuQR0UmiqOI/giphy.gif",
    });
    setTweetMessage("");
  };
  const [tweetMessage, setTweetMessage] = useState("");
  return (
    <div className="tweet__box">
      <AccountCircleIcon style={{fontSize: 55}}/>
      <div className="tweet__box__contents">
        <input
          type="text"
          placeholder="What's happening?"
          onChange={(e) => setTweetMessage(e.target.value)}
          value={tweetMessage}
        />
        <div className="tweet__box__attach">
          <div className="tweet__box__attach__items">
            <CropOriginalIcon
              className="attach__item"
              style={{ fontSize: 36 }}
            />
            <EqualizerIcon className="attach__item" style={{ fontSize: 36 }} />
            <InsertEmoticonIcon
              className="attach__item"
              style={{ fontSize: 36 }}
            />
            <ScheduleIcon className="attach__item" style={{ fontSize: 36 }} />
          </div>
          <a onClick={sendTweet} className="tweet_box__tweet__button">
            Tweet
          </a>
        </div>
      </div>
    </div>
  );
}

export default TweetBox;
