import React from 'react';
import ReactDOM from 'react-dom';
import {App, StateType} from './App';
import {addPost} from "./Redux/State";

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(<App appState={state} addPost={addPost}/>, document.getElementById('root'));
}