import React from 'react';
import './Sidebar.css';
import TwitterIconComponent from '../TwitterIcon/TwitterIcon';
import SidebarItems from '../SidebarItems/SidebarItems';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
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
            <TwitterIconComponent />
            <SidebarItems classRef="main__icons" name="Home" icon={HomeOutlinedIcon} />
            <SidebarItems classRef="main__icons" name="Explore" icon={SearchIcon} />
            <SidebarItems classRef="main__icons" name="Notifications" icon={NotificationsNoneIcon} />
            <SidebarItems classRef="main__icons" name="Messages" icon={MailOutlineIcon} />
            <SidebarItems classRef="bookmark" name="Bookmarks" icon={BookmarkBorderIcon} />
            <SidebarItems classRef="lists" name="Lists" icon={ListAltIcon} />
            <SidebarItems classRef="profile" name="Profile" icon={PermIdentityIcon} />
            <SidebarItems classRef="more" class="more__icon" name="More" icon={MoreIcon} />
            <a href="#" className="tweet__button" >Tweet</a>
            <img className="add__tweet__img" src={AddTweet} alt=""/>
        </div>
    )
}

export default Sidebar;
