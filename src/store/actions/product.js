import * as actionType from './actionTypes';

export const productInit = () => {
    return {
        type: actionType.PRODUCT_INIT,
    };
};

export const setProductSelectedId = (selectedId) => {
    return {
        type: actionType.SET_PRODUCT_SELECTED_ID,
        selectedProductId: selectedId,
    }
}