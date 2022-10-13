import React from "react";
import {Post} from "./Post/Post";

export const MyPosts = () => {

    return (
        <div className="mypost">
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <Post message="Hey!" like="4 likes"/>
            <Post message="How are you?" like="2 likes"/>
            <Post message="Wow, i see you!" like="3 likes"/>
            <Post message="You are here!" like="4 likes"/>
            <Post message="You are here!" like="4 likes"/>
            <Post message="You are here!" like="4 likes"/>
            <Post message="You are here!" like="4 likes"/>
            <Post message="You are here!" like="4 likes"/>
            <Post message="You are here!" like="4 likes"/>
            <Post message="You are here!" like="4 likes"/>
            <Post message="You are here!" like="4 likes"/>
        </div>
    )
}