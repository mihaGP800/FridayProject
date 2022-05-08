const initState = {}

type InitStateType = typeof initState

export const profileReducer = (state: InitStateType = initState, action: ProfileActionsType): InitStateType => {
    switch (action.type) {
        case '':
            return state
        default:
            return state
    }
}

export type ProfileActionsType = any