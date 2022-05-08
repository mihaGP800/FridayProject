import React from 'react';
import './App.css';
import {Nav} from './routes/Nav';
import {Header} from './header/Header';

export const App = () => {
    return (
        <div>
            <Header/>
            <Nav/>
        </div>
    );
}
