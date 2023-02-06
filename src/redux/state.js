const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        profilePage: {
            post: [
                {id: 1, message: "Первый пост", likeCount: 12},
                {id: 2, message: "Второй пост", likeCount: 22},
            ],
            newPostText: 'Напиши сюда:)'
        },
        messagesPage: {
            messages: [
                {id: 1, message: "Салам"},
                {id: 2, message: "Yo"}
            ],
            dialogs: [
                {id: 1, name: "Askar"},
                {id: 2, name: "Bogdan"}
            ]
        },
        friendsNav: {
            friendsNavBar: [
                {id: 1, name: "Askar", status: 1},
                {id: 2, name: "Bogdan", status: 0}
            ]
        }
    },
    _callSubscriber(){

    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.post.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default store;