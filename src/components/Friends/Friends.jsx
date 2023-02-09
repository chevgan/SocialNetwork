import React from "react";
import FriendsItem from './FriendsItem/FriendsItem'
import s from "./Friends.module.css"
import {DepartureBoard} from "@mui/icons-material";

const Friends = (props) => {
    let state = props.friendsNavBar;
    let friendElements = state.friendsNavBar.map( friendsNavBar => <FriendsItem name={friendsNavBar.name} status={friendsNavBar.status}/> );
    return (
        <div className={s.friends}>
            {friendElements}
        </div>
    );
}
export default Friends;