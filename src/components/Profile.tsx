import React from "react";
import p from "./Profile.module.css";

export const Profile = () => {
    return (
        <div className={p.content}>
            <div>
                <img src="https://static-cse.canva.com/blob/560385/benjaminhung340384unsplash.jpg" alt=""/>
            </div>
            <div>Avatar + description</div>
            <div>
                My post
                <div>New post</div>
                <div className={p.item}>
                    <div>post 1</div>
                    <div>post 2</div>
                </div>
            </div>
        </div>
    )
}