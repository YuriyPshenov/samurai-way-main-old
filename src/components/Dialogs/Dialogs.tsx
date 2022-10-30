import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {MessagesPageType} from "../../App";


type DialogsPropsType = {
    messagesPageData: MessagesPageType
}

export const Dialogs: React.FC<DialogsPropsType> = ({messagesPageData}) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {messagesPageData.dialogsData.map(d => {
                    return (
                        <DialogItem name={d.name} id={d.id}/>
                    )
                })}
            </div>
            <div className={s.messages}>
                {messagesPageData.messagesData.map(m => {
                    return <Message message={m.message}/>
                })}
            </div>
        </div>
    )
}