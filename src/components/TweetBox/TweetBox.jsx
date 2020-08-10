import React, { useState } from "react";
import "./TweetBox.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import ScheduleIcon from "@material-ui/icons/Schedule";
import firebaseApp from "../../Firebase";

function TweetBox() {
  const [imageUrlStatus, setImageUrlStatus] = useState(false);
  const imageUrlBoxhandler = () => {
    imageUrlStatus ? setImageUrlStatus(false) : setImageUrlStatus(true);
  }

  const db = firebaseApp.firestore();
  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Cristiano Ronaldo",
      userName: "cristiano",
      verified: true,
      postContent: tweetMessage,
      postMedia: imageUrl,
    });
    console.log(imageUrl);
    setTweetMessage("");
    setImageUrl("");
    setImageUrlStatus(false);
  };

  const [tweetMessage, setTweetMessage] = useState("");
  const [imageUrl, setImageUrl] = useState("")

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
        { imageUrlStatus &&
          <input onChange={(e) => setImageUrl(e.target.value)} value={imageUrl} placeholder="Paste the image/GIF url here" className="image__media__input" type="text"/>
        }
        <div className="tweet__box__attach">
          <div className="tweet__box__attach__items">
            <CropOriginalIcon
              className="attach__item"
              style={{ fontSize: 36 }}
              onClick={imageUrlBoxhandler}
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
