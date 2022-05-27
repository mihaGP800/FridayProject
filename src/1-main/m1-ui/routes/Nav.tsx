import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Login} from '../common/Login';
import HW4 from '../common/SuperComponents/HW4';
import {Register} from '../common/Register';
import {Profile} from '../common/Profile';
import {Error404} from '../common/Error404/Error404';
import {SetNewPassword} from '../common/SetNewPassword';
import {PasswordRecovery} from '../common/PasswordRecovery';

export enum PATH {
    login = '/login',
    register = '/register',
    profile = '/profile',
    error404 = '/404',
    passwordRecovery = '/passwordRecovery',
    setNewPassword = '/setNewPassword',
    superComponents = '/superComponents',
    someUrl = '/*',
    fridayProject = '/FridayProject',


}


export const Nav = () => {
    return (
        <Routes>
            <Route path={PATH.login} element={<Login/>}/>
            <Route path={PATH.register} element={<Register/>}/>
            <Route path={PATH.profile} element={<Profile/>}/>
            <Route path={PATH.passwordRecovery} element={<PasswordRecovery/>}/>
            <Route path={PATH.setNewPassword} element={<SetNewPassword/>}/>
            <Route path={PATH.error404} element={<Error404/>}/>
            <Route path={PATH.superComponents} element={<HW4/>}/>

            <Route path={PATH.someUrl} element={<Navigate to={PATH.error404}/>}/>
            <Route path={PATH.fridayProject} element={<Navigate to={PATH.profile}/>}/>
        </Routes>
    );
}