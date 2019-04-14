// import React from 'react';

import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

// import Image1 from '../../assets/images/showcase1.png';
// import Image2 from '../../assets/images/dakota-johnson-beauty-river.jpg';
// import Image3 from '../../assets/images/COSME_Web-05.png';
// import Image4 from '../../assets/images/img4.jpg';
// import Image4p from '../../assets/images/img4p.jpg';
// import Image6 from '../../assets/images/img6.jpg';
// import Image6p from '../../assets/images/img6p.jpg';
// import scmini1 from '../../assets/images/scmini1.jpg';
// import scmini1p from '../../assets/images/scmini1p.jpg';
// import scmini2 from '../../assets/images/scmini2.jpg';
// import scmini2p from '../../assets/images/scmini2p.jpg';
// import scmini3 from '../../assets/images/scmini3.jpg';
// import scmini3p from '../../assets/images/scmini3p.jpg';

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
                    src: "https://lh3.google.com/u/0/d/1mtDz7nP1wdNyejB9LIGNr3b8zB-9ldhn",
                    portraitSrc: "https://lh3.google.com/u/0/d/1JX4v6OCQBh57ETzPonh2umtAuZlvYKaz",
                }],
            ],
        },
        1: {
            id: "sc2",
            imgs: [ 
                [{
                    src: "https://lh3.google.com/u/0/d/1Yi_usIzWetHBR5xw8kA7f3nchOqx08gT",
                    portraitSrc: "https://lh3.google.com/u/0/d/1HFrVGaUI80JsgdOuM4sdyayQamiYdlNn",
                }],
            ],
        },
        2: {
            id: "sc3",
            imgs: [ 
                [{
                    src: "https://lh3.google.com/u/0/d/1n63CUKeyrw2WoSXSql7dloN05rPFtzBe",
                    portraitSrc: "https://lh3.google.com/u/0/d/1UHiLfpHgAdZWFG0AOjQO2_orHPXgPq5X",
                }],
            ],
        },
        3: {
            id: "sc4",
            imgs: [ 
                [{
                    src: "https://lh3.google.com/u/0/d/1C8H4slPcMukJQ9V9yjbKwk5Fq-An2P8y",
                    portraitSrc: "https://lh3.google.com/u/0/d/1C8H4slPcMukJQ9V9yjbKwk5Fq-An2P8y",
                }],
            ],
        },
        4: {
            id: "sc5",
            imgs: [ 
                [{
                    src: "https://lh3.google.com/u/0/d/15YSp8S_H8Zz0rEyed8n56vbI9z019lzX",
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
                    src: "https://lh3.google.com/u/0/d/1UIxTUVNgMkizeyjKR3mA45LOcQdLV5Z3",
                    portraitSrc: "https://lh3.google.com/u/0/d/1p8ZCZOvH_O6KfUz6p70VlFLPabrKassa",
                }],
            ],
        },
        1: {
            id: "scmini2",
            imgs: [ 
                [{
                    src: "https://lh3.google.com/u/0/d/1YX5g2dGLStroaRq_O36E6T-Xg0-HAeSb",
                    portraitSrc: "https://lh3.google.com/u/0/d/1s4TZHeIQnLvNg9Zbx3sJoWjhc5jjUc94",
                }],
            ],
        },
        2: {
            id: "scmini3",
            imgs: [ 
                [{
                    src: "https://lh3.google.com/u/0/d/1wJBz55N0xEabB5sid2LFWv42x5XTp10m",
                    portraitSrc: "https://lh3.google.com/u/0/d/1CW9b-gokcy4bj2rjDP9mHQsMkQxx1usS",
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