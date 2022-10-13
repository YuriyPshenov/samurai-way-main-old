import React from 'react';
import './App.css';

export const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src="https://www.edigitalagency.com.au/wp-content/uploads/Twitter-logo-png.png" alt=""/>
            </header>
            <nav className="nav">
                <div>Profile</div>
                <div>Messages</div>
                <div>News</div>
                <div>Music</div>
                <div>Settings</div>
            </nav>
            <div className="content">
                <div>
                    <img src="https://static-cse.canva.com/blob/560385/benjaminhung340384unsplash.jpg" alt=""/>
                </div>
                <div>Avatar + description</div>
                <div>
                    My post
                    <div>New post</div>
                    <div>
                        <div>post 1</div>
                        <div>post 2</div>
                    </div>
                </div>
            </div>
        </div>
    );
}