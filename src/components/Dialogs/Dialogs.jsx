import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogsItem";
import MessagesItem from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/> );
    let messagesElements = props.messages.map( message => <MessagesItem message={message.message}/> )

    let newMessageElement = React.createRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text)
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
                <textarea ref={newMessageElement}></textarea>
                <button onClick={ addMessage }>Отправить</button>
            </div>
        </div>
    )
}
export default Dialogs;