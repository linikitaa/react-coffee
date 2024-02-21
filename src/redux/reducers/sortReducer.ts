import {ListSortType} from "../../components/Sort/Sort";

let initialState: ListSortType = {name: "популярности", sortProperty: 'rating'}
export const sortReducer = (state = initialState, action: ChangeSortAC): ListSortType => {
    switch (action.type) {
        case 'SORT': {
            return {...state, name: action.payload.name, sortProperty: action.payload.sortProperty};

        }
        default:
            return state
    }
}

export type ChangeSortAC = ReturnType<typeof changeSortAC>
export const changeSortAC = (name: string, sortProperty: string) => {
    return {
        type: 'SORT',
        payload: {name, sortProperty}
    } as const
}
