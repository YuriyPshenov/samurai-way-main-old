import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {state} from "./Redux/State";
import {addPost} from "./Redux/State";

addPost('helloooo its newpost!!!!')

ReactDOM.render(<App appState={state} addPost={addPost} />, document.getElementById('root'));