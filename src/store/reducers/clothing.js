import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    clothesList: [
        {
            id: "1",
            src: 'https://d2h2vnfmmg5sct.cloudfront.net/home/static/images/170119_SUB_WsDrape34TBlouse.jpg',
            title: 'Drape 3/4 Sleeve T-shirt Blouse',
            caption: 'Elegant drape style perfect for clean or casual looks!',
            price: 29.9,
        },
        {
            id: "2",
            src: 'https://d2h2vnfmmg5sct.cloudfront.net/home/static/images/280219_SUB_WsMelagneKnittedCoat.jpg',
            title: 'Wool Hooded Knitted Coat',
            caption: 'Thick, warm knit coat for effortless, everyday style!',
            price: 49.9,
        },
        {
            id: "3",
            src: 'https://d2h2vnfmmg5sct.cloudfront.net/home/static/images/19MAR_MAIN-3DKnitCocoonSweater.jpg',
            title: '3D Cotton Cocoon Sweater',
            caption: 'Seamless, wholegarment knit!',
            price: 39.9,
        },
        {
            id: "4",
            src: 'https://d2h2vnfmmg5sct.cloudfront.net/home/static/images/280219_MAIN_WsCashmereCrewNeckSweater.jpg',
            title: 'Neck Long Sleeve Sweater',
            caption: 'Premium knitwear for unparalled comfort and warmth!',
            price: 129.9,
        },
        {
            id: "5",
            src: 'https://d2h2vnfmmg5sct.cloudfront.net/home/static/images/Corduroy_Cropped_Pants_Sub_Tile.jpg',
            title: 'Corduroy Wide Cropped Pants',
            caption: 'Flattering, ribbed corduroy perfect for smart or casual outfits!',
            price: 49.9,
        },
    ],
    building: false,
    selectedId: null,
};

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.CLOTHING_INIT) {
        return state;
    } else if (action.type === actionTypes.SET_SELECTED_ID) {
        return updateObject(state, {
            selectedId: action.selectedId,
        });
    }
    return state;
};

export default reducer;