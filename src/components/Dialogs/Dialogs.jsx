import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogsItem";
import MessagesItem from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogsReducer";


const Dialogs = (props) => {

    let state = props.store.getState().messagesPage

    let dialogsElements = state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/> );
    let messagesElements = state.messages.map( message => <MessagesItem message={message.message}/> )
    let newMessageBody = state.newMessageBody;

    let newMessageElement = React.createRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text)
    }

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyActionCreator(body));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
            <div>
                <textarea onChange={onNewMessageChange} value={ newMessageBody } placeholder='Введите сообщение...' ref={newMessageElement}></textarea>
                <button onClick={ onSendMessageClick }>Отправить</button>
            </div>
        </div>
    )
}
export default Dialogs;