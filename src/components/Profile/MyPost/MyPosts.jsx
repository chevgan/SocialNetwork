import React from "react";
import Post from "./Post/Post";
import state, {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/state";
import {type} from "@testing-library/user-event/dist/type";

const MyPosts = (props) => {

    let postElements = props.posts.map( p => <Post message={p.message} likeCount={p.likeCount}/> )

    let newPostElement = React.createRef();
    let addPost = () => {
        props. dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostActionCreator(text);
        props.dispatch(action);

    }



    return (
        <div>
            <textarea placeholder='Введите сообщение...' onChange={onPostChange} ref={newPostElement} cols="30" rows="10" value={props.newPostText} />
            <button onClick={ addPost  }>Добавить пост</button>
                <div>
                    { postElements }
                </div>

        </div>
    )
}

export default MyPosts;