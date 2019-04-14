import React from 'react';
// import { NavLink } from 'react-router-dom';

import classes from './Footer.css';
// import Logo from '../../Logo/Logo';
// import NavigationItems from '../NavigationItems/NavigationItems';
// import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = ( props ) => (
    <div className={classes.Footer}>
        <div className={classes.TopDiv}>
            <div>
                <p>STAY IN TOUCH</p>
                <p>Subscribe to us for more discount and new product information!</p>
            </div>
            
        </div>
        <div className={classes.BottomDiv}>
            <div>
                <input placeholder="SUBSCRIBE:"/>
            </div>
            <div></div>
            <div>
                <p className={classes.FooterLinks}>
                    <a href="https://www.facebook.com">FACEBOOK</a>
                    <a href="https://plus.google.com">GOOGLE PLUS</a>
                    <a href="https://www.twitter.com">TWITTER</a>
                    <a href="https://www.dribble.com">DRIBBLE</a>
                    <a href="https://www.behance.com">BEHANCE</a>
                    <a href="https://www.pinterest.com">PINTEREST</a>
                </p>
                <p>REBORN (C) 2019. ALL RIGHTS RESERVED</p>
            </div>
        </div>
    </div>
);

export default toolbar;