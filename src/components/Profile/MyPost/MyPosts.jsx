import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElements = props.posts.map( p => <Post message={p.message} likeCount={p.likeCount}/> )

    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
    }
    return (
        <div>
            <textarea ref={newPostElement} cols="30" rows="10"></textarea>
            <button onClick={ addPost }>Добавить пост</button>
                <div>
                    { postElements }
                </div>

        </div>
    )
}

export default MyPosts;