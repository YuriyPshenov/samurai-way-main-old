import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import {SiteBarType} from "../../App";

type NavbarPropsType = {
    siteBar: SiteBarType
}

export const Navbar: React.FC<NavbarPropsType> = ({siteBar}) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.friends}>
                <div className={s.friend}>
                    <div className={s.friendTitle}>Friends</div>
                    <div className={s.friendsGrid}>
                        {siteBar.friendsData.map(f => {
                            return (
                                <div className={s.friendOne}>
                                    <div className={s.friendAvatar}>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/1024px-Emblem-person-blue.svg.png" alt="logo"/>
                                    </div>
                                    <div className={s.friendNames}>{f.name}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </nav>
    )
}