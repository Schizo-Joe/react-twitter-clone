import React, {useState, useContext} from 'react';
import './LandingPage.css';
import FavIcon from './favicon240.png';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import SearchIcon from '@material-ui/icons/Search';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';


function LandingPage() {

    const [userName, setUserName] = useState();
    const [passWord, setPassWord] = useState();

    const [loginComponentStatus, setLoginComponentStatus] = useState(false);

    const [signUpComponentStatus, setSignUpComponentStatus] = useState(false);

    const signUpComponentStatusHandler = () => {
        if(signUpComponentStatus) {
            setSignUpComponentStatus(false);
        } else{
            setSignUpComponentStatus(true);
        }
    }
    const loginComponentStatusHandler = () => {
        if(loginComponentStatus) {
            setLoginComponentStatus(false); 
        } else{
            setLoginComponentStatus(true);       
        }
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
            <div className="login">
                <form className="login__form" action="">
                <div className="user__name__form">
                    <label class="input__label" htmlFor="username">Phone, email or username</label>
                    <input className="login__input" type="text" name="username" value={userName} onChange={e => setUserName(e.target.value)}/>
                </div>
                <div className="user__password__form">
                    <label class="input__label" htmlFor="password">Password</label>
                    <input className="login__input" type="text" name="password" value={passWord} onChange={e => setPassWord(e.target.value)} />
                    <a className="forgot__link" href="#">Forgot password?</a>
                </div>
                <a href="#" className="login__button">Login</a>
                </form>
            </div>
                <div className="tagline__contents">
                    <img class="fav__icon" src={FavIcon} alt=""/>
                    <h2 className="tagline">See what's happening in</h2>
                    <h2 className="tagline">the world right now</h2>
                    <div className="join__twitter">
                        <p>Join Twitter today.</p>
                        <a onClick={signUpComponentStatusHandler} className="signup__button" href="#">Sign up</a>
                        <a onClick={loginComponentStatusHandler} className="login__button__main" href="#">Log in</a>
                    </div>
                </div>
            </div>
            
        </div>
            {signUpComponentStatus && <SignUp activeStatusHandler={signUpComponentStatusHandler} />}
            {loginComponentStatus && <Login activeStatusHandler={loginComponentStatusHandler} />}
        </div>
    )
}

export default LandingPage;
