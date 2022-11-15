import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import {App, StateType} from './App';
import {addPost, state, subscribe, updateNewPostText} from "./Redux/State";
import {BrowserRouter} from "react-router-dom";

const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App appState={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)