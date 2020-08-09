import React from 'react';
import './SidebarItems.css';

function SidebarItems(props) {
    return (
        <div className="sidebar__items">
            <props.icon style={{fontSize: 28}}/>
            <h2 className="sidebar__items__name">{props.name}</h2>
        </div>
    )
}

export default SidebarItems;
