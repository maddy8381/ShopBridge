import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import siteReducer from "./site/siteReducer";

export const initialStore = {

};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    siteReducer,
    initialStore,
    composeEnhancers(applyMiddleware(thunk))
);
export default store;