
export type FilterState = {
    categoryId: number
    currentPage: number
    sort: {name: string, sortProperty: string}
}

let initialState:FilterState= {
    categoryId: 0,
    currentPage: 1,
    sort: {name: "популярности", sortProperty: 'rating'}
}
export const filterReducers = (state = initialState, action: ActionType):FilterState => {
    switch (action.type) {
        case 'SORT': {
            return {...state, sort: {...state.sort, name: action.payload.name, sortProperty: action.payload.sortProperty}};

        }
        case 'SET_CATEGORY_ID': {
            return  {...state, categoryId:action.payload.id}

        }
        case 'SET_PAGE_ID': {
            return  {...state, currentPage:action.payload.num}

        }
        default:
            return state
    }
}

type ActionType = ChangeCategoryIdAC | ChangeSortAC | OnChangePageAC


export type ChangeSortAC = ReturnType<typeof changeSortAC>
export type ChangeCategoryIdAC = ReturnType<typeof changeCategoryIdAC>
export type OnChangePageAC = ReturnType<typeof onChangePageAC>
export const changeSortAC = (name: string, sortProperty: string) => {
    return {
        type: 'SORT',
        payload: {name, sortProperty}
    } as const
}


export const changeCategoryIdAC = (id:number) => {
    return{
        type: 'SET_CATEGORY_ID',
        payload: {id}
    }as const
}
export const onChangePageAC = (num:number) => {
    return{
        type: 'SET_PAGE_ID',
        payload: {num}
    }as const
}
