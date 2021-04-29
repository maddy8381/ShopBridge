import { initialStore } from "../store";
import {
    FETCH_SHOPPING_ITEMS_REQUEST,
    FETCH_SHOPPING_ITEMS_SUCCESS,
    FETCH_SHOPPING_ITEMS_FAILURE,
} from "./siteActionTypes";


export default function siteReducer(state = initialStore, action) {
    switch (action.type) {
        case FETCH_SHOPPING_ITEMS_REQUEST:
            return {
                ...state,
                shoppingItems: {
                    ...state.shoppingItems,
                    loading: true
                }
            };

        case FETCH_SHOPPING_ITEMS_SUCCESS:
            return {
                ...state,
                shoppingItems: {
                    ...state.shoppingItems,
                    loading: false,
                    error: ''
                }
            };

        case FETCH_SHOPPING_ITEMS_FAILURE:
            return {
                ...state,
                shoppingItems: {
                    ...state.shoppingItems,
                    loading: false,
                    error: 'Error In Fetching Items'
                }
            };

        default:
            return state;
    }
}