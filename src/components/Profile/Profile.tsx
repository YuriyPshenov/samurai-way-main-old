import React from "react";
import {MyPosts} from "./MyPost/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../App";

type ProfilePropsType = {
    postData: Array<PostDataType>
}

export const Profile: React.FC<ProfilePropsType> = ({postData}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={postData} />
        </div>
    )
}