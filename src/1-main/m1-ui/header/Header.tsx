import React from 'react';
import {NavLink} from 'react-router-dom';
import {PATH} from '../routes/Nav';
import s from './Header.module.css'

export const Header = () => {
    const classNameLink = (navClick: any) => navClick.isActive ? s.active : `${s.active} ${s.passive}`
    return (
        <div className={s.header}>
            <NavLink to={PATH.login} className={classNameLink}>login</NavLink>
            <NavLink to={PATH.register} className={classNameLink}>register</NavLink>
            <NavLink to={PATH.profile} className={classNameLink}>profile</NavLink>
            <NavLink to={PATH.error404} className={classNameLink}>error404</NavLink>
            <NavLink to={PATH.passwordRecovery} className={classNameLink}>passwordRecovery</NavLink>
            <NavLink to={PATH.enterNewPassword} className={classNameLink}>enterNewPassword</NavLink>
            <NavLink to={PATH.hw4} className={classNameLink}>hw4</NavLink>
        </div>
    );
}