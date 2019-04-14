import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    currentPath: "",
    searching: false,
};

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.SET_CURRENT_PATH) {
        return updateObject(state, {
            currentPath: action.currentPath,
        });
    } else if (action.type === actionTypes.SET_SEARCHING) {
        return updateObject(state, {
            searching: action.searching,
        });
    }
    return state;
};

export default reducer;