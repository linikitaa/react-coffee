
let initialState = ''
export const searchReducer = (state = initialState, action: SearchInputAC) => {
    switch (action.type) {
        case 'SEARCH': {
            return action.payload.value

        }
        default:
            return state
    }
}

export type SearchInputAC = ReturnType<typeof searchInputAC>
export const searchInputAC = (value:string) => {
    return {
        type: 'SEARCH',
        payload: {value}
    } as const
}
