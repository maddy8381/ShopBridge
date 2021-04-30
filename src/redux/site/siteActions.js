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



const deleteItemRequest = () => {
    return {
        type: DELETE_SHOPPING_ITEM_REQUEST,
    };
};

const deleteItemSuccess = (id) => {
    return {
        type: DELETE_SHOPPING_ITEM_SUCCESS,
        payload: id,
    };
};

const deleteItemFailure = (error) => {
    return {
        type: DELETE_SHOPPING_ITEM_FAILURE,
        payload: error,
    };
};

export function deleteItem(id) {

    return (dispatch) => {
        dispatch(deleteItemRequest());
        dispatch(deleteItemSuccess(id));
        dispatch(deleteItemFailure());
    };
}


const addItemRequest = () => {
    return {
        type: ADD_SHOPPING_ITEM_REQUEST,
    };
};

const addItemSuccess = (itemObj) => {
    return {
        type: ADD_SHOPPING_ITEM_SUCCESS,
        payload: itemObj,
    };
};

const addItemFailure = (error) => {
    return {
        type: ADD_SHOPPING_ITEM_FAILURE,
        payload: error,
    };
};

export function addItem(itemObj) {

    return (dispatch) => {
        dispatch(addItemRequest());
        dispatch(addItemSuccess(itemObj));
        dispatch(addItemFailure());
    };
}



const modifyItemRequest = () => {
    return {
        type: MODIFY_SHOPPING_ITEM_REQUEST,
    };
};

const modifyItemSuccess = (updatedItemObj) => {
    return {
        type: MODIFY_SHOPPING_ITEM_SUCCESS,
        payload: updatedItemObj,
    };
};

const modifyItemFailure = (error) => {
    return {
        type: MODIFY_SHOPPING_ITEM_FAILURE,
        payload: error,
    };
};

export function modifyItem(updatedItemObj) {

    return (dispatch) => {
        dispatch(modifyItemRequest());
        dispatch(modifyItemSuccess(updatedItemObj));
        dispatch(modifyItemFailure());
    };
}