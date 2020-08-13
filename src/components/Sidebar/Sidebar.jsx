import React, {useContext, useState} from 'react';
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
import {Link, BrowserRouter as Router, Switch, NavLink} from 'react-router-dom';
import firebaseApp from '../../Firebase';
import { CurrentUserDetailsContext } from '../../CurrentUserDetailsProvider';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';


function Sidebar() {
    const [currentUserDetails, setCurrentUserDetails] = useContext(
        CurrentUserDetailsContext
      );
    const [signOutButtonStatus, setSignOutButtonStatus] = useState(false);
    const auth = firebaseApp.auth();

    const signOutButtonHandler = () => {
        setSignOutButtonStatus((signOutButtonStatus)? false: true)
    }

    const signOutHandler = () => {
        auth.signOut();
    }
    return (
        <div className="sidebar__wrapper">
            <div className="sidebar">
                <TwitterIconComponent />
                <Link to="/">
                    <SidebarItems classRef="main__icons" name="Home" icon={HomeOutlinedIcon} />
                </Link>
                <Link to="/explore" >
                    <SidebarItems classRef="main__icons" name="Explore" icon={SearchIcon} />
                </Link>
                <Link to="/notifications">
                    <SidebarItems classRef="main__icons" name="Notifications" icon={NotificationsNoneIcon} />
                </Link>
                <Link to="/messages">
                    <SidebarItems classRef="main__icons" name="Messages" icon={MailOutlineIcon} />
                </Link>
                <Link to="/bookmarks">
                    <SidebarItems classRef="bookmark" name="Bookmarks" icon={BookmarkBorderIcon} />
                </Link>
                <Link to="/lists">
                    <SidebarItems classRef="lists" name="Lists" icon={ListAltIcon} />
                </Link>
                <Link to="/profile">
                    <SidebarItems classRef="profile" name="Profile" icon={PermIdentityIcon} />
                </Link>
                <SidebarItems classRef="more" class="more__icon" name="More" icon={MoreIcon} />
                <a href="#" className="tweet__button" >Tweet</a>
                <img className="add__tweet__img" src={AddTweet} alt=""/>

                
            </div>
                <div className="sidebar__profileControl">
                    {signOutButtonStatus &&<p className="profileControl__logoutButton" onClick={signOutHandler}>Logout</p>}
                    <div className="sidebar__profileControl__imageDiv">
                        <img className="sidebar__profileControl__image" src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec593cc431fb70007482137%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1321%26cropX2%3D3300%26cropY1%3D114%26cropY2%3D2093" alt=""/>
                        <div className="profileControl__names">
                            <p className="profileControl__name">Cristiano Ronaldo</p>
                            <p className="profileControl__userName">@cristiano</p>
                        </div>
                        <MoreVertOutlinedIcon onClick={signOutButtonHandler} className="profileControl__moreIcon"/>
                    </div>
                </div>
        </div>
    )
}

export default Sidebar;
