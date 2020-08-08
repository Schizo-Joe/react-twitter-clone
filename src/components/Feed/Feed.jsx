import React from 'react';
import './Feed.css';
import TweetBox from '../TweetBox/TweetBox';
import Post from '../Post/Post';

function Feed() {
    return (
        <div className="feed">
            <div className="home__header">
                <h2>Home</h2>
            </div>
            <TweetBox />
            <Post imageUrl="https://source.unsplash.com/random/300x200"/>
            <Post imageUrl="https://source.unsplash.com/random/300x200"/>
            <Post imageUrl="https://source.unsplash.com/random/300x200"/>
            <Post imageUrl="https://source.unsplash.com/random/300x200"/>
            <Post imageUrl="https://source.unsplash.com/random/300x200"/>
            <Post imageUrl="https://source.unsplash.com/random/300x200"/>
        </div>
    )
}

export default Feed;
