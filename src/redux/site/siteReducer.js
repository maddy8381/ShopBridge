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
                loading: true,
            };
        case FETCH_SHOPPING_ITEMS_SUCCESS:
            return {
                ...state,
            };
        case FETCH_SHOPPING_ITEMS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
}