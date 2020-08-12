import React from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import './Home.css';
import Sidebar from '../Sidebar/Sidebar';
import Feed from '../Feed/Feed';
import Explore from '../Explore/Explore';
import Notifications from '../Notifications/Notifications';
import Messages from '../Messages/Messages';
import Bookmarks from '../Bookmarks/Bookmarks';
import Lists from '../Lists/Lists';
import Profile from '../Profile/Profile';

import Widgets from '../Widgets/Widgets';

function Home() {
  return (<Router>
    <div className="home">
        <Sidebar className="sidebar" />
        <div className="feed__widget__wrapper">
              <Switch >
                <Route exact path="/" component={Feed} className="feed"/>
                <Route exact path="/explore" component={Explore} />
                <Route exact path="/notifications" component={Notifications} />
                <Route exact path="/messages" component={Messages} />
                <Route exact path="/bookmarks" component={Bookmarks} />
                <Route exact path="/lists" component={Lists} />
                <Route exact path="/profile" component={Profile} />


              </Switch>
            <Widgets className="widgets" />
        </div>
    </div>
    </Router>
  );
}

export default Home;
