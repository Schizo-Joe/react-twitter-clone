import React, { useState, useEffect } from "react";
import "./Feed.css";
import { Link } from "react-router-dom";
import TweetBox from "../TweetBox/TweetBox";
import Post from "../Post/Post";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import firebaseApp from "../../Firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const db = firebaseApp.firestore();
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   db.collection("posts").onSnapshot((snapshot) =>
  //     setPosts(snapshot.docs.map((doc) => doc.data()))
  //   );
  // }, []);

  useEffect(() => {
    db.collection("posts")
      .orderBy("time", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <div className="feed">
      <div className="home__header">
        <Link to="profile-menu">
          <img
            className="profileMenuPageIcon"
            src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec593cc431fb70007482137%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1321%26cropX2%3D3300%26cropY1%3D114%26cropY2%3D2093"
            alt=""
          />
        </Link>
        <h2>Home</h2>
      </div>
      <TweetBox />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.postContent}
            avatar={post.postAvatar}
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
