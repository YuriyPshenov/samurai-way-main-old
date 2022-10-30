import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';

let postData = [
    {id: 1, message: 'Hi all', likesCount: 4},
    {id: 2, message: 'Im here now', likesCount: 3},
    {id: 3, message: 'HERE!', likesCount: 10},
    {id: 4, message: 'WOW', likesCount: 4},
    {id: 5, message: 'LOL', likesCount: 7},
    {id: 6, message: 'LOL', likesCount: 7},
]

ReactDOM.render(<App postData={postData} />, document.getElementById('root'));