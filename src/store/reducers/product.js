import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

// import Image1 from '../../assets/images/showcase1.png';
// import Image2 from '../../assets/images/dakota-johnson-beauty-river.jpg';
// import Item1Image from '../../assets/images/mac_sku_MKXM01_640x600_0.jpg';
// import Item2Image from '../../assets/images/BTPC150_5.jpg';

const initialState = {
    productList: [
        {
            id: "a0",
            img: "https://lh3.google.com/u/0/d/1OKSyM-K6u6_z994DAqG1jBvXFIEieNuR",
            title: "Essential Oils",
            details: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            price: 32,
            annotationsText: "Audrey Hepburn" 
        },
        {
            id: "a1",
            img: "https://lh3.google.com/u/0/d/1Mg-oHag6iwQfu-tYkohstt9kJF2iu8Ob",
            title: "Skin Care Kit",
            details: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            price: 64,
        },
        {
            id: "a2",
            img: "https://lh3.google.com/u/0/d/1OKSyM-K6u6_z994DAqG1jBvXFIEieNuR",
            title: "Essential Oils",
            details: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            price: 100,
        },
        {
            id: "a3",
            img: "https://lh3.google.com/u/0/d/1Mg-oHag6iwQfu-tYkohstt9kJF2iu8Ob",
            title: "Skin Care Kit",
            details: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            price: 150,
        },
    ],
    selectedProductId: 0,
};

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.PRODUCT_INIT) {
        return state;
    } else if (action.type === actionTypes.SET_PRODUCT_SELECTED_ID) {
        return updateObject(state, {
            selectedProductId: action.selectedProductId,
        });
    }
    return state;
};

export default reducer;