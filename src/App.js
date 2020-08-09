import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Widgets from './components/Widgets/Widgets';

function App() {
  return (
    <div className="app">
      <Sidebar className="sidebar" />
      <div className="feed__widget__wrapper">
        <Feed className="feed"/>
        <Widgets className="widgets" />
      </div>
    </div>
  );
}

export default App;
