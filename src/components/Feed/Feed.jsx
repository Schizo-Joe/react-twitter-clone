import React from 'react';
import './Feed.css';
import TweetBox from '../TweetBox/TweetBox';
import Post from '../Post/Post';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Feed() {
    return (
        <div className="feed">
            <div className="home__header">
                <h2>Home</h2>
            </div>
            <TweetBox />
            <Post 
                avatar={AccountCircleIcon}
                displayName="Lionel Messi"
                userName="leomessi"
                verified={true}
                postContent="Thank God, we are now in last 8, we will come back soon with more power, love you all"
                postMedia="https://source.unsplash.com/random/300x200"
                />
                <Post 
                avatar={AccountCircleIcon}
                displayName="Lionel Messi"
                userName="leomessi"
                verified={true}
                postContent="We wiil win today, may GOD save the KINg"
                postMedia="https://source.unsplash.com/random/300x200"
                />
                <Post 
                avatar={AccountCircleIcon}
                displayName="Lionel Messi"
                userName="leomessi"
                verified={true}
                postContent="We wiil win today, may GOD save the KINg"
                postMedia="https://source.unsplash.com/random/300x200"
                />
                <Post 
                avatar={AccountCircleIcon}
                displayName="Lionel Messi"
                userName="leomessi"
                verified={true}
                postContent="We wiil win today, may GOD save the KINg"
                postMedia="https://source.unsplash.com/random/300x200"
                />
        </div>
    )
}

export default Feed;
