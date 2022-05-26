const initState = {}

type InitStateType = typeof initState

export const setNewPasswordReducer = (state: InitStateType = initState, action: SetNewPasswordActionsType): InitStateType => {
    switch (action.type) {
        case '':
            return state
        default:
            return state
    }
}

export type SetNewPasswordActionsType = any