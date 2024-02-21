import {combineReducers, createStore} from "redux";
import {categoriesReducer} from "./reducers/categoriesReducer";
import {sortReducer} from "./reducers/sortReducer";



const rootReducer = combineReducers({
    categoryId:categoriesReducer,
    sort:sortReducer
})

export const store = createStore(rootReducer)
export type HomeRootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store