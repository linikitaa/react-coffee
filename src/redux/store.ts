import {combineReducers, createStore} from "redux";
import {searchReducer} from "./reducers/searchReducer";
import {filterReducers} from "./reducers/filterReducers";



const rootReducer = combineReducers({
    filter: filterReducers,
    search: searchReducer,
})

export const store = createStore(rootReducer)
export type HomeRootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store