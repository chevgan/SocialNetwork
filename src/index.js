import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <App
                newPostText={store.getState().profilePage.newPostText}
                posts={store.getState().profilePage.post}
                dialogs={store.getState().messagesPage.dialogs}
                messages={store.getState().messagesPage.messages}
                friendsNavBar={store.getState().friendsNav.friendsNavBar}
                dispatch={store.dispatch.bind(store)}
                store={store}

            />
        </React.StrictMode>);

};
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
