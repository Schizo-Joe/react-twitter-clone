import React from 'react';
import './Explore.css';
import SearchIcon from '@material-ui/icons/Search';


function Explore(props) {
    console.log(props)
    return (
        <div className="explorePage">
            <div className="explorePage__searchBlock">
                <div className="explorePage__search">
                    <SearchIcon className="explorePage__searchIcon" />
                    <input type="text" placeholder="Search Twitter"/>
                </div>
            </div>
        </div>
    )
}

export default Explore;
