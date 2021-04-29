import {
    FETCH_SHOPPING_ITEMS_REQUEST,
    FETCH_SHOPPING_ITEMS_SUCCESS,
    FETCH_SHOPPING_ITEMS_FAILURE,
} from "./siteActionTypes";

const fetchItemsRequest = () => {
    return {
        type: FETCH_SHOPPING_ITEMS_REQUEST,
    };
};

const fetchItemsSuccess = () => {
    return {
        type: FETCH_SHOPPING_ITEMS_SUCCESS,
        payload: '',
    };
};

const fetchItemsFailure = (error) => {
    return {
        type: FETCH_SHOPPING_ITEMS_FAILURE,
        payload: error,
    };
};

export function fetchShoppingItems() {

    return (dispatch) => {
        dispatch(fetchItemsRequest());
        dispatch(fetchItemsSuccess());
        dispatch(fetchItemsFailure());
    };
}
