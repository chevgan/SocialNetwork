import React from "react";
import s from "./FriendsItem.module.css"
const FriendsItem = (props) => {

    return (
        <div className={s.friendsItem}>
            <img className={s.img} src="https://icons.iconarchive.com/icons/danleech/simple/1024/github-icon.png" alt=""/>

            <div className={s.status}>
                {props.name} <br/>
                Статус: {props.status}
            </div>
        </div>
    )
}

export default FriendsItem;