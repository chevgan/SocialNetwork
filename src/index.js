import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: "Первый пост", likeCount: 12},
    {id: 2, message: "Второй пост", likeCount: 22},
]
let dialogs = [
    {id: 1, name: "Askar"},
    {id: 2, name: "Bogdan"}
]
let messages = [
    {id: 1, message: "Салам"},
    {id: 2, message: "Yo"}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
