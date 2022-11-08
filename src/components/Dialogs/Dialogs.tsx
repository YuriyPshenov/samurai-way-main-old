import React, {LegacyRef} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {MessagesPageType} from "../../App";


type DialogsPropsType = {
    messagesPageData: MessagesPageType
}

export const Dialogs: React.FC<DialogsPropsType> = ({messagesPageData}) => {

    const refMessage: LegacyRef<HTMLTextAreaElement> | undefined = React.createRef()

    const sendMessage = () => {
        const textMessage = refMessage.current!.value
        if (textMessage !== '') {
            alert(textMessage)
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {messagesPageData.dialogsData.map(d => {
                    return (
                        <DialogItem name={d.name} id={d.id} key={d.id}/>
                    )
                })}
            </div>
            <div className={s.messages}>
                {messagesPageData.messagesData.map(m => {
                    return <Message message={m.message} key={m.id}/>
                })}
                <textarea ref={refMessage}></textarea>
                <button onClick={sendMessage}>send message</button>
            </div>
        </div>
    )
}