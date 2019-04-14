import React from 'react';

import classes from './Showcase.css';
import Image from '../UI/Image/Image';

const showcase = (props) => {
    // return  <div className={classes.ShowcaseImage}>
    //     <img className={classes.ShowcaseImage} src={props.src} alt={props.title} />
    // </div>;
    // </section>
    let portraitSrc = props.portraitSrc !== undefined ? props.portraitSrc : props.src;
    return <div 
            className={[classes.Showcase, classes[props.defaultLayout]].join(' ')}
            style={props.divStyle}>
        <Image src={props.src}  alt={props.title} annotations={props.annotations} />
        <Image src={portraitSrc}  alt={props.title} annotations={props.annotations}/>
    </div>;
};

export default showcase;