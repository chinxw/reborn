import React from 'react';

import classes from './ShopNowItem.css';

const shopNowItem = (props) => {
    return (
        <div className={classes.ShopNowItem}>
            <div>
                <img className={classes.ShopNowItemImage} src={props.src} alt={props.title} />
            </div>
            <div>
                <p>{props.title}</p>
                <p>{props.caption}</p>
            </div>
        </div>
    );
};

export default shopNowItem;