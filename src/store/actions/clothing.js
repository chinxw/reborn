import * as actionType from './actionTypes';

export const setSelectedId = (selectedId) => {
    return {
        type: actionType.SET_SELECTED_ID,
        selectedId: selectedId,
    };
};