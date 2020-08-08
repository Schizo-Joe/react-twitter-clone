import React from 'react';
import './TweetBox.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import GifIcon from '@material-ui/icons/Gif';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import ScheduleIcon from '@material-ui/icons/Schedule';


function TweetBox() {
    return (
        <div className="tweet__box">
            <AccountCircleIcon />
            <div className="tweet__box__contents">
                <input type="text" placeholder="What's happening?"/>
                <div className="tweet__box__attach">
                    <div className="tweet__box__attach__items">
                        <CropOriginalIcon className="attach__item" style={{ fontSize: 36 }} />
                        <GifIcon className="attach__item" style={{ fontSize: 36 }} />
                        <EqualizerIcon className="attach__item" style={{ fontSize: 36 }} />
                        <InsertEmoticonIcon className="attach__item" style={{ fontSize: 36 }} />
                        <ScheduleIcon className="attach__item" style={{ fontSize: 36 }} />
                    </div>
                    <a href="#" className="tweet_box__tweet__button">Tweet</a>
                </div>
            </div>
        </div>
    )
}

export default TweetBox;
