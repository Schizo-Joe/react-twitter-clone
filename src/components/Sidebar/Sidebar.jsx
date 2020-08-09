import React from 'react';
import './Sidebar.css';
import SidebarItems from '../SidebarItems/SidebarItems';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreIcon from '@material-ui/icons/More';
import AddTweet from './tweet.png';

function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon  className="twitter__icon" style={{fontSize: 28}} />
            <SidebarItems className="home__icon" name="Home" icon={HomeIcon} />
            <SidebarItems name="Explore" icon={SearchIcon} />
            <SidebarItems name="Notifications" icon={NotificationsNoneIcon} />
            <SidebarItems name="Messages" icon={MailOutlineIcon} />
            <SidebarItems name="Bookmarks" icon={BookmarkBorderIcon} />
            <SidebarItems name="Lists" icon={ListAltIcon} />
            <SidebarItems name="Profile" icon={PermIdentityIcon} />
            <SidebarItems class="more__icon" name="More" icon={MoreIcon} />
            <a href="#" className="tweet__button" >Tweet</a>
            <img className="add__tweet__img" src={AddTweet} alt=""/>
        </div>
    )
}

export default Sidebar;
