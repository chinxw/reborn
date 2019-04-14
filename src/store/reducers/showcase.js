import React from 'react';

import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

import Image1 from '../../assets/images/showcase1.png';
import Image2 from '../../assets/images/dakota-johnson-beauty-river.jpg';
import Image3 from '../../assets/images/COSME_Web-05.png';
import Image4 from '../../assets/images/img4.jpg';
import Image4p from '../../assets/images/img4p.jpg';
import Image6 from '../../assets/images/img6.jpg';
import Image6p from '../../assets/images/img6p.jpg';
import scmini1 from '../../assets/images/scmini1.jpg';
import scmini1p from '../../assets/images/scmini1p.jpg';
import scmini2 from '../../assets/images/scmini2.jpg';
import scmini2p from '../../assets/images/scmini2p.jpg';
import scmini3 from '../../assets/images/scmini3.jpg';
import scmini3p from '../../assets/images/scmini3p.jpg';

const initialState = {
    showcaseList: {
        // 0: {
        //     id: "sc1",
        //     imgs: [
        //         {
        //             src: Image1,
        //             annotations: null,
        //                 // <div style={{
        //                 //     marginLeft: "15%",
        //                 //     height: "70%",
        //                 //     display: "flex",
        //                 //     alignItems: "flex-end",
        //                 //     fontFamily: "bodoni-urw, serif",
        //                 //     textTransform: "uppercase",
        //                 //     width: "20px",
        //                 //     fontWeight: "bold",
        //                 //     fontSize: "2.5vw",
        //                 //     }}>
        //                 //     Top Seller
        //                 // </div>
        //         },
        //         {
        //             src: Image2,
        //             annotations: null,
        //                 // <div style={{
        //                 //     marginLeft: "-8%",
        //                 //     height: "60%",
        //                 //     display: "flex",
        //                 //     alignItems: "flex-end",
        //                 //     fontFamily: "bodoni-urw, serif",
        //                 //     textTransform: "uppercase",
        //                 //     width: "20px",
        //                 //     fontWeight: "bold",
        //                 //     fontSize: "2.5vw",
        //                 //     }}>
        //                 //     New Trend
        //                 // </div>
        //         },
        //     ],
        // },
        
        0: {
            id: "sc1",
            imgs: [ 
                [{
                    src: Image4,
                    portraitSrc: Image4p,
                }],
            ],
        },
        1: {
            id: "sc2",
            imgs: [ 
                [{
                    src: Image6,
                    portraitSrc: Image6p,
                }],
            ],
        },
        2: {
            id: "sc3",
            imgs: [ 
                [{
                    src: Image1,
                    portraitSrc: Image1,
                }],
            ],
        },
        3: {
            id: "sc4",
            imgs: [ 
                [{
                    src: Image2,
                    portraitSrc: Image2,
                }],
            ],
        },
        4: {
            id: "sc5",
            imgs: [ 
                [{
                    src: Image3,
                    portraitSrc: Image3,
                }],
            ],
        },
    },
    selectedId: 0,
    showcaseMini: {
        0: {
            id: "scmini1",
            imgs: [ 
                [{
                    src: scmini1,
                    portraitSrc: scmini1p,
                }],
            ],
        },
        1: {
            id: "scmini2",
            imgs: [ 
                [{
                    src: scmini2,
                    portraitSrc: scmini2p,
                }],
            ],
        },
        2: {
            id: "scmini3",
            imgs: [ 
                [{
                    src: scmini3,
                    portraitSrc: scmini3p,
                }],
            ],
        },
    }
};



const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.SHOWCASE_INIT) {
        return state;
    } else if (action.type === actionTypes.SET_SHOWCASE_SELECTED_ID) {
        return updateObject(state, {
            selectedId: action.selectedId,
        });
    }
    return state;
};

export default reducer;