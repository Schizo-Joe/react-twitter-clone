import React from 'react';
import './Post.css';

function Post(props) {
    return (
        <div>
           <img src={props.imageUrl} alt=""/> 
        </div>
    )
}

export default Post;
