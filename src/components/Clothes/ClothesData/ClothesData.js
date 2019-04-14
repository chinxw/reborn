import React from 'react';
import { connect } from 'react-redux';

import Clothes from '../Clothes';
import Button from '../../UI/Button/Button';

const clothesData = (props) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <Clothes
                src={props.src}
                title={props.title}
                caption={props.caption}
                price={props.price}
                oneCol={true}></Clothes>
            {!props.isAuth ? <p>You must be logged in to proceed!</p> : null}
            <Button btnType="Danger" clicked={props.cancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.continue}>{props.isAuth ? 'ADD TO CHECKOUT' : 'LOG IN'}</Button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token != null,
    }
}

export default connect(mapStateToProps)(clothesData);