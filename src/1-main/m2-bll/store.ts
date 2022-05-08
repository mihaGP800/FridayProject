import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk, {ThunkAction} from 'redux-thunk';
import {ProfileActionsType, profileReducer} from './profileReduser';


const rootReducer = combineReducers({
    profile: profileReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

//all types actions for app
export type AppActionsType = ProfileActionsType | any



//AppThunk type
export type AppThunk<ReturnType = void> =
    ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>

export const store = createStore(rootReducer, applyMiddleware(thunk))