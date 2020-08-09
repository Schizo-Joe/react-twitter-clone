import React from 'react';
import './Widgets.css';
import SearchIcon from '@material-ui/icons/Search';
import {TwitterTimelineEmbed,
        TwitterShareButton,
        TwitterTweetEmbed} from "react-twitter-embed";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__search">
                <SearchIcon className="widgets__search__icon" />
                <input type="text" placeholder="Search Twitter"/>
            </div>
            <div className="widgets__contents">
                <h2>What's happening?</h2>
                <TwitterTweetEmbed tweetId={"1292328519968731136"} />
                <TwitterTimelineEmbed sourceType="profile" screenName="FCBarcelona" options={{height: 400}} />
            </div>


        </div>
    )
}

export default Widgets;
