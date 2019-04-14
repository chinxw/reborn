import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    checkoutProduct: [],
};

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.CHECKOUT_INIT) {
        return state;
    } else if (action.type === actionTypes.ADD_PRODUCT_TO_CHECKOUT) {
        return updateObject(state, {
            checkoutProduct: state.checkoutProduct.concat(action.product),
        });
    }
    return state;
};

export default reducer;