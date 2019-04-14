import React, { Component } from 'react';
import {connect} from 'react-redux';

import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/Footer/Footer';
import * as actions from '../../store/actions/index';
import * as pathConstants from '../../shared/constants';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    SearchToggleHandler = () => {
        if (!this.props.searching)
            this.props.onSetSearching(true);
    }

    SearchCloseHandler = () => {
        this.props.onSetSearching(false);
    }

    render () {
        let shopPage = this.props.currentPath === pathConstants.PATH_CLASSIC 
            || this.props.currentPath === pathConstants.PATH_SHOP
            || this.props.currentPath === pathConstants.PATH_CHECKOUT;

        return (
            <div className={classes.Layout}>
                <Toolbar
                    isAuth={this.props.isAuthenticated}
                    drawerToggleClicked={this.sideDrawerToggleHandler} 
                    searching={this.props.searching}
                    shopPage={shopPage}
                    searchClicked={this.SearchToggleHandler}
                    closeClicked={this.SearchCloseHandler}
                    />
                <SideDrawer
                    isAuth={this.props.isAuthenticated}
                    open={this.state.showSideDrawer}
                    shopPage={shopPage}
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        currentPath: state.reborn.currentPath,
        searching: state.reborn.searching,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetSearching: (path) => dispatch(actions.setSearching(path)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);