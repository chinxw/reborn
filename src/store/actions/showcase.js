import * as actionType from './actionTypes';

export const showcaseInit = () => {
    return {
        type: actionType.SHOWCASE_INIT,
    };
};

export const setShowcaseSelectedId = (selectedId) => {
    return {
        type: actionType.SET_SHOWCASE_SELECTED_ID,
        selectedId: selectedId,
    }
}