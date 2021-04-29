import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import siteReducer from "./site/siteReducer";

export const initialStore = {
    shoppingItems: {
        loading: false,
        error: '',
        items: [
            {
                name: 'Item1',
                price: '$100'
            }
        ]
    }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    siteReducer,
    initialStore,
    composeEnhancers(applyMiddleware(thunk))
);
export default store;