import React, { forwardRef } from "react";
import "./Post.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import PresentToAllOutlinedIcon from "@material-ui/icons/PresentToAllOutlined";

const Post = forwardRef((props, ref) => {
  let activeClass;

  return (
    <div className="post" ref={ref}>
      <img
        src={props.avatar}
        className="post__avatar"
        style={{ fontSize: 55 }}
      />
      <div className="post__contents">
        <div className="post__contents__names">
          <p class="account__name">{props.displayName}</p>
          <VerifiedUserIcon
            className="verified__icon"
            style={{ display: props.verified ? "inline-block" : "none" }}
          />
          <p class="user__name">@{props.userName}</p>
        </div>
        <div className="post__contents__text">
          <p>{props.postContent}</p>
        </div>
        <div className="post__content__media">
          <img src={props.postMedia} alt="" />
        </div>
        <div className="post__contents__reactions">
          <div className="reaction__comment" onClick={props.commentsHandler}>
            <ChatBubbleOutlineOutlinedIcon />
            <p>{props.commentsCount}</p>
          </div>
          <div className="reaction__retweet">
            <RepeatOutlinedIcon />
            <p>10</p>
          </div>
          <div
            className={`reaction__like ${props.likeStatus}`}
            onClick={props.likesHandler}
          >
            <FavoriteBorderOutlinedIcon />
            <p>{props.likesCount}</p>
          </div>
          <div className="reaction__share">
            <PresentToAllOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Post;
