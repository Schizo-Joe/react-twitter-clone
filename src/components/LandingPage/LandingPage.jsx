import React, {useState} from 'react';
import './LandingPage.css';
import FavIcon from './favicon240.png';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import SearchIcon from '@material-ui/icons/Search';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';

function LandingPage() {
    const [loginComponentStatus, setLoginComponentSatus] = useState(false);

    const [signUpComponentStatus, setSignUpComponentSatus] = useState(false);

    const signUpComponentStatusHandler = () => {
        signUpComponentStatus ? setSignUpComponentSatus(false) : setSignUpComponentSatus(true);
    }


    return (
        <div className="container">
        <div className="landing__page">
            <div className="left__banner">
                <div className="banner__texts">
                    <div className="banner__text__row">
                        <SearchIcon style={{marginRight: 15}} />
                        <h2 classname="banner__text">Follow your interests.</h2>
                    </div>
                    <div className="banner__text__row">
                        <PeopleAltOutlinedIcon style={{marginRight: 15}} />
                        <h2 classname="banner__text">Hear what people are talking about.</h2>
                    </div>
                    <div className="banner__text__row">
                        <ChatBubbleOutlineOutlinedIcon style={{marginRight: 15}} />
                        <h2 classname="banner__text">Join the conversation.</h2>
                    </div>
                </div>
            </div>
            <div className="right__forms">
                <Login />
                <div className="tagline__contents">
                    <img class="fav__icon" src={FavIcon} alt=""/>
                    <h2 className="tagline">See what's happening in</h2>
                    <h2 className="tagline">the world right now</h2>
                    <div className="join__twitter">
                        <p>Join Twitter today.</p>
                        <a onClick={signUpComponentStatusHandler} className="signup__button" href="#">Sign up</a>
                        <a className="login__button__main" href="">Log in</a>
                    </div>
                </div>
            </div>
            
        </div>
        {signUpComponentStatus && <SignUp />}
        </div>
    )
}

export default LandingPage;
