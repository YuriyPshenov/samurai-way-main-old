import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Valera',},
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yo, whats up?'},
        {id: 3, message: 'How are you'},
        {id: 4, message: 'Bro'},
        {id: 5, message: 'Hello',},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData.map(d => {
                    return (
                        <DialogItem name={d.name} id={d.id}/>
                    )
                })}
            </div>
            <div className={s.messages}>
                {messagesData.map(m => {
                    return <Message message={m.message}/>
                })}
            </div>
        </div>
    )
}