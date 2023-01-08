import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElements = props.posts.map( p => <Post message={p.message} likeCount={p.likeCount}/> )

    return (
        <div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Добавить пост</button>
                <div>
                    { postElements }
                </div>

        </div>
    )
}

export default MyPosts;