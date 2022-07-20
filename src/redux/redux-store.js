import {applyMiddleware, combineReducers, createStore} from "redux";
import cadastReducer from "./cadastReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import cadastItemDataReducer from "./cadastItemDataReducer";


const reducers = combineReducers({
    cadast: cadastReducer,
    cadastItemData: cadastItemDataReducer
})

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))