import React from "react";
import s from "./ProfileInfo.module.css"

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://static-cse.canva.com/blob/560385/benjaminhung340384unsplash.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>Avatar + description</div>
        </div>
    )
}