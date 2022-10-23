import React from "react";
import s from "./Dialogs.module.css"
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Dialog/Message";


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog name="Dimych" id="1"/>
                <Dialog name="Andrey" id="2"/>
                <Dialog name="Sveta" id="3"/>
                <Dialog name="Sasha" id="4"/>
                <Dialog name="Valera" id="5"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How are you?"/>
                <Message message="Yo"/>
            </div>
        </div>
    )
}