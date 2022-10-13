import React from "react";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <Post message="Hey!" like="4 likes"/>
            <Post message="How are you?" like="2 likes"/>
            <Post message="How are you?" like="3 likes"/>
            <Post message="How are you?" like="4 likes"/>
        </div>
    )
}