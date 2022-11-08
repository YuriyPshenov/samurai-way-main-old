import React, {LegacyRef} from "react";
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css"
import {PostDataType} from "../../../App";

type MyPostsPropsType = {
    postData: Array<PostDataType>
}

export const MyPosts: React.FC<MyPostsPropsType> = ({postData}) => {

    const newPostElement: LegacyRef<HTMLTextAreaElement> | undefined = React.createRef()

    const addPost = () => {
        const text = newPostElement.current!.value
        alert(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                    <button onClick={()=>{alert('removing post')}}>Remove</button>
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