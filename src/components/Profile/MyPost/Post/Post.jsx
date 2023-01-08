import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
            <div className={s.item}>
                <img src="https://icons.iconarchive.com/icons/danleech/simple/1024/github-icon.png" alt=""/>
                {props.message}
                <div>
                    <span>like</span> {props.likeCount}
                </div>
            </div>
    )
}

export default Post;