import React, {useContext, useState, useEffect} from 'react';
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
import AccountCircleIcon from "@material-ui/icons/AccountCircle";



function Sidebar() {
    const [currentUserDetails, setCurrentUserDetails] = useContext(
        CurrentUserDetailsContext
      );
      const [userImageStatus, setUserImageStatus] = useState(true);

     useEffect(() => {
        if(currentUserDetails.profileImage) {
            setUserImageStatus(true);
        } else {
            setUserImageStatus(false);
        }
     },[])
    const [signOutButtonStatus, setSignOutButtonStatus] = useState(false);
    const auth = firebaseApp.auth();

    const signOutButtonHandler = () => {
        console.log(currentUserDetails);
        setSignOutButtonStatus((signOutButtonStatus)? false: true);
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
                    {signOutButtonStatus && <p className="profileControl__logoutButton" onClick={signOutHandler}>Logout</p>}
                    <div className="sidebar__profileControl__imageDiv">
                        <div className="icon__names">
                        {(!userImageStatus)&&<AccountCircleIcon className="profileControl__dummyIcon" />}
                        {userImageStatus &&<img className="sidebar__profileControl__image" src={currentUserDetails.profileImage} alt=""/>}
                        <div className="profileControl__names">
                            <p onClick={()=> console.log(currentUserDetails)} className="profileControl__name">{currentUserDetails.name}</p>
                            <p className="profileControl__userName">@{currentUserDetails.userName}</p>
                        </div>
                        </div>
                        <MoreVertOutlinedIcon onClick={signOutButtonHandler} className="profileControl__moreIcon"/>
                    </div>
                </div>
        </div>
    )
}

export default Sidebar;
