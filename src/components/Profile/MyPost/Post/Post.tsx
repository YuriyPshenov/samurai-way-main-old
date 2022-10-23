import React from "react";
import s from "./Post.module.css";


type messagePropsType = {
    message: string;
    like: string;
}

export const Post = (props: messagePropsType) => {
    return (
        <div className={s.item}>
            <div className={s.avatar}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/1024px-Emblem-person-blue.svg.png"
                    alt=""/>
            </div>
            <div className={s.postMessage}>
                {props.message}
            </div>
            <div className={s.likes}>
                <span>{props.like}</span>
            </div>
        </div>
    )
}