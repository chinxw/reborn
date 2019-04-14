import React from 'react';
import { connect } from 'react-redux';

import classes from './ProductCompact.css';

const product = (props) => {
    return (
        <div className={classes.ProductCompact} onClick={props.clicked}>
            <div className={classes.ImageDiv}>
                <img className={classes.Image} src={props.src} alt={props.key}></img>
            </div>
            <div className={classes.DetailsDiv}>
                <div>
                    <p className={classes.Title}>{props.title}</p>
                    <p className={classes.Details}>{props.details}</p>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token != null,
    }
}

export default connect(mapStateToProps)(product);