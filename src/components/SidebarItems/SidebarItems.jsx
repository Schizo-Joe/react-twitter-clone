import React from 'react';
import './SidebarItems.css';

function SidebarItems(props) {
    const class_name = "sidebar__items " + props.classRef;
    return (
        <div className={class_name}>
            <props.icon style={{fontSize: 28}}/>
            <h2 className="sidebar__items__name">{props.name}</h2>
        </div>
    )
}

export default SidebarItems;
