import React from "react";
import {MyPosts} from "./MyPost/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../App";

type ProfilePropsType = {
    profilePageData: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export const Profile: React.FC<ProfilePropsType> = ({profilePageData, addPost, updateNewPostText}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={profilePageData.postData} addPost={addPost} newPostText={profilePageData.newPostText} updateNewPostText={updateNewPostText}/>
        </div>
    )
}