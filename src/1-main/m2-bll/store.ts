import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import thunk, {ThunkAction} from 'redux-thunk';
import {ProfileActionsType, profileReducer} from './profileReducer';
import {LoginActionsType} from './loginReducer';
import {RegisterActionsType} from './registerReducer';
import {PasswordRecoveryActionsType} from './passwordRecoveryReducer';
import {SetNewPasswordActionsType} from './setNewPasswordReducer';


const rootReducer = combineReducers({
    profile: profileReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

//all types actions for app
export type ProjectActionsType = ProfileActionsType
    | LoginActionsType
    | RegisterActionsType
    | PasswordRecoveryActionsType
    | SetNewPasswordActionsType

//AppThunk type
export type AppThunk<ReturnType = void> =
    ThunkAction<ReturnType, AppRootStateType, unknown, ProjectActionsType>

export const store = createStore(rootReducer, applyMiddleware(thunk))