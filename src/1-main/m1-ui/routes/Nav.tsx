import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Login} from '../common/Login';
import HW4 from '../common/SuperComponents/HW4';
import {Register} from '../common/Register';
import {Profile} from '../common/Profile';
import {Error404} from '../common/Error404';
import {EnterNewPassword} from '../common/EnterNewPassword';
import {PasswordRecovery} from '../common/PasswordRecovery';

export enum PATH {
    login = '/login',
    register = '/register',
    profile = '/profile',
    error404 = '/*',
    passwordRecovery = '/passwordRecovery',
    enterNewPassword = '/enterNewPassword',
    hw4 = '/hw4',
}


export const Nav = () => {
    return (
        <Routes>
            <Route path={PATH.login} element={<Login/>}/>
            <Route path={PATH.register} element={<Register/>}/>
            <Route path={PATH.profile} element={<Profile/>}/>
            <Route path={PATH.error404} element={<Error404/>}/>
            <Route path={PATH.passwordRecovery} element={<PasswordRecovery/>}/>
            <Route path={PATH.enterNewPassword} element={<EnterNewPassword/>}/>
            <Route path={PATH.hw4} element={<HW4/>}/>
        </Routes>
    );
}