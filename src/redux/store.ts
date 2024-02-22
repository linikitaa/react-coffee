import {combineReducers, createStore} from "redux";
import {categoriesReducer} from "./reducers/categoriesReducer";
import {sortReducer} from "./reducers/sortReducer";
import {searchReducer} from "./reducers/searchReducer";



const rootReducer = combineReducers({
    categoryId:categoriesReducer,
    sort:sortReducer,
    search:searchReducer,
})

export const store = createStore(rootReducer)
export type HomeRootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store