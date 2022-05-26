const initState = {}

type InitStateType = typeof initState

export const loginReducer = (state: InitStateType = initState, action: LoginActionsType): InitStateType => {
    switch (action.type) {
        case '':
            return state
        default:
            return state
    }
}

export type LoginActionsType = any