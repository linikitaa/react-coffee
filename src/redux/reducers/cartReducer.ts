import {NewItem} from "../../components/CoffeeBlock";


export type initialSt = {
    totalPrice: number
    items:NewItem[]
}

let initialState:initialSt = {
    totalPrice:0,
    items: []
}
export const cartReducer = (state = initialState, action: ActionType):initialSt => {
    switch (action.type) {
        case 'ADD_ITEM': {
            const itemsFind = state.items.find(obj => obj.id === action.payload.item.id);

            if (itemsFind) {
                itemsFind.count += 1;
            } else {
                action.payload.item.count = 1;
                state.items.push(action.payload.item);
            }

            return {...state, totalPrice: state.items.reduce((acc, obj) => acc + obj.price * obj.count, 0)}

        }
        case 'REMOVE_ITEM': {
            return {...state, items: state.items.filter(el=> el.id !== action.payload.id)}
        }
        case 'PLUS_ITEM': {
            return {...state, items: state.items.map(el=> el.id === action.payload.id
                    ? {...el, count: el.count+1}
                    : el)}
        }
        case 'MINUS_ITEM': {
            return {...state, items: state.items.map(el=> el.id === action.payload.id
                ? {...el, count: el.count-1}
                : el)}
        }
        case 'CLEAR_CART': {
            return {...state, items:state.items = [], totalPrice: 0}
        }
        default:
            return state
    }
}

type ActionType = CartAddAC | RemoveAddItemAC | CartClearItems | PlusItem | MinusItem
export type CartAddAC = ReturnType<typeof cartAddItemAC>
export type RemoveAddItemAC = ReturnType<typeof removeAddItemAC>
export type CartClearItems = ReturnType<typeof cartClearItems>
export type PlusItem = ReturnType<typeof plusItem>
export type MinusItem = ReturnType<typeof minusItem>
export const cartAddItemAC = (item:NewItem) => {
    return {
        type: 'ADD_ITEM',
        payload: {item}
    } as const
}
export const removeAddItemAC = (id:number) => {
    return {
        type: 'REMOVE_ITEM',
        payload: {id}
    } as const
}
export const cartClearItems = () => {
    return {
        type: 'CLEAR_CART',
        payload: {}
    } as const
}
export const plusItem = (id:number) => {
    return {
        type: 'PLUS_ITEM',
        payload: {id}
    } as const
}
export const minusItem = (id:number) => {
    return {
        type: 'MINUS_ITEM',
        payload: {id}
    } as const
}