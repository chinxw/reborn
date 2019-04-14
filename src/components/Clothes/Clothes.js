import React from 'react';

import classes from './Clothes.css';

const clothes = (props) => {
    return (
        <div className={props.oneCol ? classes.ClothesOneCol : classes.ClothesTwoCol} onClick={props.clicked}>
            {props.src ? <img className={classes.ClothesImage} src={props.src} alt={props.title}/> : null}
            <h2>{props.title ? props.title : null}</h2>
            <p>{props.caption ? props.caption : null}</p>
            <p>{props.price ? "$"+props.price.toFixed(2) : null}</p>
        </div>
    );
};

export default clothes;