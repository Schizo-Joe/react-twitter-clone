import React from 'react';
import './Post.css';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

function Post(props) {
    return (
        <div className="post">
           <props.avatar className="post__avatar" style={{ fontSize: 55}} />
           <div className="post__contents">
               <div className="post__contents__names">
                    <p class="account__name">{props.displayName}</p>
                    <VerifiedUserIcon className="verified__icon" style={{display:(props.verified)?"inline-block":"none"}} />
                    <p class="user__name">@{props.userName}</p>
                </div>
               <div className="post__contents__text">
                <p>{props.postContent}</p>
               </div>
               <div className="post__content__media">
                <img src={props.postMedia} alt=""/>
               </div>
               <div className="post__contents__reactions">

               </div>
           </div>
        </div>
    )
}

export default Post;
