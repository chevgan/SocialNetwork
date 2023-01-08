import React from "react";
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={"/dialogs/" + props.id}
                     className={Dialog => Dialog.isActive ? s.active : s.item}>{props.name}</NavLink>
        </div>
    )

}

export default DialogItem;