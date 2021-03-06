import { initialStore } from "../store";
import {
    FETCH_SHOPPING_ITEMS_REQUEST,
    FETCH_SHOPPING_ITEMS_SUCCESS,
    FETCH_SHOPPING_ITEMS_FAILURE,
    ADD_SHOPPING_ITEM_REQUEST,
    ADD_SHOPPING_ITEM_SUCCESS,
    ADD_SHOPPING_ITEM_FAILURE,
    DELETE_SHOPPING_ITEM_REQUEST,
    DELETE_SHOPPING_ITEM_SUCCESS,
    DELETE_SHOPPING_ITEM_FAILURE,
    MODIFY_SHOPPING_ITEM_REQUEST,
    MODIFY_SHOPPING_ITEM_SUCCESS,
    MODIFY_SHOPPING_ITEM_FAILURE,
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

        case DELETE_SHOPPING_ITEM_REQUEST:
            return {
                ...state,
                shoppingItems: {
                    ...state.shoppingItems,
                    loading: true
                }
            };

        case DELETE_SHOPPING_ITEM_SUCCESS:
            return {
                ...state,
                shoppingItems: {
                    ...state.shoppingItems,
                    items: state.shoppingItems.items.filter(
                        item => item.id !== action.payload
                    ),
                    loading: false,
                    error: ''
                }
            };

        case DELETE_SHOPPING_ITEM_FAILURE:
            return {
                ...state,
                shoppingItems: {
                    ...state.shoppingItems,
                    loading: false,
                    error: 'Error In Deleting Item'
                }
            };

        case ADD_SHOPPING_ITEM_REQUEST:
            return {
                ...state,
                shoppingItems: {
                    ...state.shoppingItems,
                    loading: true
                }
            };

        case ADD_SHOPPING_ITEM_SUCCESS:
            action.payload.id = state.counter + 1;
            return {
                ...state,
                counter: state.counter + 1,
                shoppingItems: {
                    ...state.shoppingItems,
                    items: [action.payload, ...state.shoppingItems.items],
                    loading: false,
                    error: ''
                }
            };

        case ADD_SHOPPING_ITEM_FAILURE:
            return {
                ...state,
                shoppingItems: {
                    ...state.shoppingItems,
                    loading: false,
                    error: 'Error In Adding Item'
                }
            };

        case MODIFY_SHOPPING_ITEM_REQUEST:
            return {
                ...state,
                shoppingItems: {
                    ...state.shoppingItems,
                    loading: true
                }
            };

        case MODIFY_SHOPPING_ITEM_SUCCESS:
            let objId = action.payload.id;
            let objIndex = state.shoppingItems.items.findIndex((obj => obj.id === objId));
            state.shoppingItems.items[objIndex] = action.payload;
            return {
                ...state,
                shoppingItems: {
                    ...state.shoppingItems,
                    items: [...state.shoppingItems.items],
                    loading: false,
                    error: ''
                }
            };

        case MODIFY_SHOPPING_ITEM_FAILURE:
            return {
                ...state,
                shoppingItems: {
                    ...state.shoppingItems,
                    loading: false,
                    error: 'Error In Adding Item'
                }
            };

        default:
            return state;
    }
}