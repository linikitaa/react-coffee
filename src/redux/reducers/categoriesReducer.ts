
let initialState=0
export const categoriesReducer = (state= initialState,action:ActionType)=> {
    switch (action.type) {
        case 'SET_CATEGORY_ID': {
            return  state = action.payload.id

        }
        default: return state
    }
}

type ActionType = ChangeCategoryIdAC
    
export type ChangeCategoryIdAC = ReturnType<typeof changeCategoryIdAC>
export const changeCategoryIdAC = (id:number) => {
    return{
        type: 'SET_CATEGORY_ID',
        payload: {id}
    }as const
}
