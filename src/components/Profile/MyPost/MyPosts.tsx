import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css"
import {PostDataType} from "../../../App";

type MyPostsPropsType = {
    postData: Array<PostDataType>
}

export const MyPosts: React.FC<MyPostsPropsType> = ({postData}) => {

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
                {postData.map(m => {
                    return <Post key={m.id} message={m.message} like={m.likesCount}/>
                })}
            </div>
        </div>
    )
}