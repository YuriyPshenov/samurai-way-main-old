import React from "react";
import p from "./Post.module.css";

type messageProsType = {
    message: string;
    like: string;
}

export const Post = (props: messageProsType) => {
    return (
        <div className={p.item}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/1024px-Emblem-person-blue.svg.png"
                alt=""/>
            {props.message}
            <div>
                <span>{props.like}</span>
            </div>
        </div>
    )
}