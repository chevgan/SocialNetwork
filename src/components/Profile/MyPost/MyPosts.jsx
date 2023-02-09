import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElements = props.posts.map( p => <Post message={p.message} likeCount={p.likeCount}/> )

    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    }


    return (
        <div>
            <textarea placeholder='Введите сообщение...' onChange={onPostChange} ref={newPostElement} cols="30" rows="10" value={props.newPostText} />
            <button onClick={ onAddPost  }>Добавить пост</button>
                <div>
                    { postElements }
                </div>

        </div>
    )
}

export default MyPosts;