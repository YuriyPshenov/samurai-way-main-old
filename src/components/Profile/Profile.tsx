import React from "react";
import p from "./Profile.module.css";
import {MyPosts} from "./MyPost/MyPosts";

export const Profile = () => {
    return (
        <div className={p.content}>
            <div>
                <img src="https://static-cse.canva.com/blob/560385/benjaminhung340384unsplash.jpg" alt=""/>
            </div>
            <div>Avatar + description</div>
            <MyPosts/>
        </div>
    )
}