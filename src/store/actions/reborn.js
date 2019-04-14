import * as actionType from './actionTypes';

export const setCurrentPath = (path) => {
    return {
        type: actionType.SET_CURRENT_PATH,
        currentPath: path,
    };
};

export const setSearching = (searching) => {
    return {
        type: actionType.SET_SEARCHING,
        searching: searching,
    }
}