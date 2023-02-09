import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsNavReducer from "./friendsNavReducer";


let store = {
    _state: {
        profilePage: {
            post: [
                {id: 1, message: "Первый пост", likeCount: 12},
                {id: 2, message: "Второй пост", likeCount: 22},
            ],
            newPostText: ''
        },
        messagesPage: {
            messages: [
                {id: 1, message: "Салам"},
                {id: 2, message: "Yo"}
            ],
            dialogs: [
                {id: 1, name: "Askar"},
                {id: 2, name: "Bogdan"}
            ],
            newMessageBody: "123"
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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.friendsNav = friendsNavReducer(this._state.friendsNav, action);
        this._callSubscriber(this._state)

    }
}


export default store;