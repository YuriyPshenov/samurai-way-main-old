import React from 'react';
import ReactDOM from 'react-dom';
import {App, StateType} from './App';
import {addPost, updateNewPostText} from "./Redux/State";

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(<App appState={state} addPost={addPost} updateNewPostText={updateNewPostText}/>, document.getElementById('root'));
}