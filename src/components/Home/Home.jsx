import React from 'react';
import './Home.css';
import Sidebar from '../Sidebar/Sidebar';
import Feed from '../Feed/Feed';
import Widgets from '../Widgets/Widgets';

function Home() {
  return (
    <div className="home">
        <Sidebar className="sidebar" />
        <div className="feed__widget__wrapper">
            <Feed className="feed"/>
            <Widgets className="widgets" />
        </div>
    </div>
  );
}

export default Home;
