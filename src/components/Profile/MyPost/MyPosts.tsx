import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css"

export const MyPosts = () => {

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message="Hey!" like="4 likes"/>
                <Post message="How are you?" like="2 likes"/>
                <Post message="Wow, i see you!" like="3 likes"/>
            </div>
        </div>
    )
}