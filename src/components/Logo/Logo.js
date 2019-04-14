import React from 'react';

import fashionLogo from '../../assets/images/reborn-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={fashionLogo} alt="Fashion" />
    </div>
);

export default logo;