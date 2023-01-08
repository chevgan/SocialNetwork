import React from "react";
import FriendsItem from './FriendsItem/FriendsItem'
import s from "./Friends.module.css"

const Friends = (props) => {
debugger
    let friendElements = props.friendsNavBar.map( f => <FriendsItem name={f.name}/> );
    return (
        <div className={s.friends}>
            {friendElements}
        </div>
    );
}
export default Friends;