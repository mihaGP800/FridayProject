import React from 'react';
import {NavLink} from 'react-router-dom';
import {PATH} from '../routes/Nav';

export const Header = () => {
    return (
        <div>
            <NavLink to={PATH.login}>login</NavLink>
            <NavLink to={PATH.register}>register</NavLink>
            <NavLink to={PATH.profile}>profile</NavLink>
            <NavLink to={PATH.error404}>error404</NavLink>
            <NavLink to={PATH.passwordRecovery}>passwordRecovery</NavLink>
            <NavLink to={PATH.enterNewPassword}>enterNewPassword</NavLink>
            <NavLink to={PATH.hw4}>hw4</NavLink>
        </div>
    );
}