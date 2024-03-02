import {combineReducers, createStore} from "redux";
import {searchReducer} from "./reducers/searchReducer";
import {filterReducers} from "./reducers/filterReducers";
import {cartReducer} from "./reducers/cartReducer";


const rootReducer = combineReducers({
    filter: filterReducers,
    search: searchReducer,
    cart: cartReducer,
})

export const store = createStore( rootReducer);
export type HomeRootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store