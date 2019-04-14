import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import SearchBoxItem from '../SearchBoxItem/SearchBoxItem';
import * as actions from '../../../store/actions/index';
import * as pathConstants from '../../../shared/constants';

const navigationItems = (props) => {
    let navItems = "";

    if (!props.searching)
        navItems = 
        <React.Fragment>
            <NavigationItem link={pathConstants.PATH_CLASSIC}>Classic</NavigationItem>
            {!props.shopPage ? <NavigationItem link="/about">About</NavigationItem> : ""}
            <NavigationItem link={pathConstants.PATH_SHOP}>Shop</NavigationItem>
            <NavigationItem link="/blog">Blog</NavigationItem>
            {!props.shopPage ? <NavigationItem link={pathConstants.PATH_CONTACT}>Contact</NavigationItem> : ""}
            {props.shopPage ? <NavigationItem link={pathConstants.PATH_CHECKOUT}>Cart({props.checkoutProduct.length})</NavigationItem> : ""}
            {props.shopPage ? <NavigationItem link="/auth">Log In</NavigationItem> : ""}
        </React.Fragment>;

    return (
        <ul className={classes.NavigationItems}>
            {navItems}
            {!props.shopPage ? <SearchBoxItem clicked={props.searchClicked} searching={props.searching} closeClicked={props.closeClicked}/> : ""}
            
            {/* {props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null} */}
            {/* {props.isAuthenticated ? <NavigationItem link="/checkout">Checkout</NavigationItem> : null}
        {!props.isAuthenticated 
            ? <NavigationItem link="/auth">Authentication</NavigationItem>
            : <NavigationItem link="/logout">Logout</NavigationItem>} */}
        </ul>
    );
}

const mapStateToProps = state => {
    return {
        checkoutProduct: state.checkout.checkoutProduct,
    };
}

export default withRouter(connect(mapStateToProps)(navigationItems));