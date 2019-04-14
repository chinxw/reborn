import React from 'react';

import classes from './Image.css';

const image = (props) => (
    <div className={classes.ImageDiv} style={props.divStyle}>
        <div>{props.annotations}</div>
        <img
            className={classes.Image}
            onClick={props.clicked}
            style={props.imgStyle}
            src={props.src}
            alt={props.alt}/>
    </div>
    
);

export default image;