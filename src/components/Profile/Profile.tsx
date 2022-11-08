import React from "react";
import {MyPosts} from "./MyPost/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../App";

type ProfilePropsType = {
    profilePageData: ProfilePageType
}

export const Profile: React.FC<ProfilePropsType> = ({profilePageData}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={profilePageData.postData}/>
        </div>
    )
}