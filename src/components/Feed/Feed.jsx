import React, { useState, useEffect, useContext } from "react";
import "./Feed.css";
import { Link } from "react-router-dom";
import TweetBox from "../TweetBox/TweetBox";
import Post from "../Post/Post";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import firebaseApp from "../../Firebase";
import FlipMove from "react-flip-move";
import { CurrentUserDetailsContext } from "../../CurrentUserDetailsProvider";

function Feed() {
  const db = firebaseApp.firestore();

  const [currentUserDetails, setCurrentUserDetails] = useContext(
    CurrentUserDetailsContext
  );

  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState([]);

  const likesHandler = () => {
    if (likes.includes({ postid: post.id })) {
    } else {
      db.collection("users")
        .doc("1hDkBYeEBsGJfSWSwl4V")
        .collection("likes")
        .add({
          postId: post.id,
        });
    }
  };

  const commentsHandler = () => {};

  useEffect(() => {
    db.collection("posts")
      .orderBy("time", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              avatar: doc.data().postAvatar,
              displayName: doc.data().displayName,
              verified: doc.data().verified,
              userName: doc.data().userName,
              postContent: doc.data().postContent,
              postMedia: doc.data().postMedia,
              likesCount: doc.data().likesCount,
              commentsCount: doc.data().commentsCount,
            };
          })
        )
      );
    db.collection("users")
      .doc("1hDkBYeEBsGJfSWSwl4V")
      .collection("likes")
      .onSnapshot((snapshot) => {
        setLikes(snapshot.docs.map((doc) => doc.data()));
      });
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
        {posts.map((post) => {
          // var likeStatus = () => {
          //   likes.map((like) => {
          //     if(like.postId === post.key) {
          //       return "active";
          //     }
          //   });
          // };
          return (
            <Post
              key={post.id}
              id={post.id}
              avatar={post.avatar}
              displayName={post.displayName}
              verified={post.verified}
              userName={post.userName}
              postContent={post.postContent}
              postMedia={post.postMedia}
              likesCount={post.likesCount}
              commentsCount={post.commentsCount}
              likesHandler={likesHandler()}
              likes={likes}
              likeStatus="active"
              commentshandler={commentsHandler}
            />
          );
        })}
      </FlipMove>
    </div>
  );
}

export default Feed;
