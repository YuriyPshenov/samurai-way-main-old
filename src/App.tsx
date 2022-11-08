import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";

export type PostDataType = {
    id: number
    message: string
    likesCount: number
}

export type MessageDataType = {
    id: number
    message: string
}

export type DialogsDataType = {
    id: number
    name: string
}

export type FriendsDataType = {
    id: number
    name: string
}

export type ProfilePageType = {
    postData: Array<PostDataType>
}

export type MessagesPageType = {
    messagesData: Array<MessageDataType>
    dialogsData: Array<DialogsDataType>
}

export type SiteBarType = {
    friendsData: Array<FriendsDataType>
}

type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    siteBar: SiteBarType
}

type AppPropsType = {
    appState: StateType
    addPost: (textMessage: string) => void
}

//ФУНКЦИЯ ЗА ОБЛАСТЬЮ ВИДИМОСТИ КОМПОНЕНТЫ АРР//
// const pureProfile = (d: Array<DialogsDataType>, m: Array<MessageDataType>) => {
//     return <Dialogs dialogsData={d} messagesData={m}/>
// }

export const App: React.FC<AppPropsType> = (
    {
        appState,
        addPost
    }) => {

    const pureProfile = () => {
        return <Profile profilePageData={appState.profilePage} addPost={addPost}/>
    }

    const pureDialogs = () => {
        return <Dialogs messagesPageData={appState.messagesPage}/>
    }

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar siteBar={appState.siteBar}/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={pureProfile}/>
                    <Route path="/dialogs" render={pureDialogs}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}