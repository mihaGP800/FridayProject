const initState = {}

type InitStateType = typeof initState

export const registerReducer = (state: InitStateType = initState, action: RegisterActionsType): InitStateType => {
    switch (action.type) {
        case '':
            return state
        default:
            return state
    }
}

export type RegisterActionsType = any