import React from "react";

const FriendsItem = (props) => {
    return (
        <div>
            <img src="https://icons.iconarchive.com/icons/danleech/simple/1024/github-icon.png" alt=""/>
            {props.name}
        </div>
    )
}

export default FriendsItem;