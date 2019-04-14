import * as actionType from './actionTypes';

export const addProductToCheckout = (product) => {
    return {
        type: actionType.ADD_PRODUCT_TO_CHECKOUT,
        product: product,
    };
};

export const checkoutInit = () => {
    return {
        type: actionType.CHECKOUT_INIT,
    };
};