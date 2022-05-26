const initState = {}

type InitStateType = typeof initState

export const passwordRecoveryReducer = (state: InitStateType = initState, action: PasswordRecoveryActionsType): InitStateType => {
    switch (action.type) {
        case '':
            return state
        default:
            return state
    }
}

export type PasswordRecoveryActionsType = any