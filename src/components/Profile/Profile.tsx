import React from "react";
import {MyPosts} from "./MyPost/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../App";

type ProfilePropsType = {
    profilePageData: ProfilePageType
    addPost: (textMessage: string) => void
}

export const Profile: React.FC<ProfilePropsType> = ({profilePageData, addPost}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={profilePageData.postData} addPost={addPost}/>
        </div>
    )
}