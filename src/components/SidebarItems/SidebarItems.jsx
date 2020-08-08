import React from 'react';
import './SidebarItems.css';

function SidebarItems(props) {
    return (
        <div className="sidebar__items">
            <props.icon />
            <h2>{props.name}</h2>
        </div>
    )
}

export default SidebarItems;
