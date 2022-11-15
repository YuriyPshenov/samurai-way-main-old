import React, {LegacyRef} from "react";
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css"
import {PostDataType} from "../../../App";

type MyPostsPropsType = {
    postData: Array<PostDataType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    const newPostElement: LegacyRef<HTMLTextAreaElement> | undefined = React.createRef()

    const addNewPost = () => {
        props.addPost()
    }

    const onPostChange = () => {
        const text = newPostElement.current!.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}></textarea>
                </div>
                <div>
                    <button onClick={addNewPost}>Add post</button>
                    <button onClick={()=>{alert('removing post')}}>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {props.postData.map(m => {
                    return <Post key={m.id} message={m.message} like={m.likesCount}/>
                })}
            </div>
        </div>
    )
}