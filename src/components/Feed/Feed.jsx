import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "../TweetBox/TweetBox";
import Post from "../Post/Post";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import db from "../../Firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      <div className="home__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.postContent}
            avatar={AccountCircleIcon}
            displayName={post.displayName}
            verified={post.verified}
            userName={post.userName}
            postContent={post.postContent}
            postMedia={post.postMedia}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
