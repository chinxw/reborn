import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import SearchBoxItem from '../SearchBoxItem/SearchBoxItem';

const toolbar = (props) => (
    <React.Fragment>
        <header className={[classes.Toolbar, props.shopPage ? classes.ShopNow : ""].join(" ")}>
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <div className={classes.Logo}>
                <NavLink to="/" exact><Logo /></NavLink>
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems
                    isAuthenticated={props.isAuth}
                    searching={props.searching}
                    shopPage={props.shopPage}
                    searchClicked={props.searchClicked}
                    closeClicked={props.closeClicked} />
            </nav>

            {/* {!props.shopPage ? <SearchBoxItem clicked={props.searchClicked} alwaysExpand={true} closeClicked={props.closeClicked} /> : null} */}

            {/* v6 */}
            {/* <div className={classes.MobileLogo}>
                <NavLink to="/" exact><Logo /></NavLink>
            </div> */}
            
            {/* <SearchBoxItem clicked={props.searchClicked} alwaysExpand={true} closeClicked={props.closeClicked} /> */}
        </header>
    </React.Fragment>
);

export default toolbar;