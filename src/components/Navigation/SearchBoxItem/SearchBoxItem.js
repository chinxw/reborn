import React from 'react';

import classes from './SearchBoxItem.css';
import { FaSearch } from 'react-icons/fa';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import Button from '../../UI/Button/Button';

const searchBoxItem = (props) => {
    // let closeBoxStyle = <IoIosCloseCircleOutline style={{ display: props.searching ? "inline" : "none", marginLeft: "5px" }} onClick={props.closeClicked}/>
    let searching = props.searching;
    let closeBox = null;
    
    if (props.alwaysExpand) {
        searching = true;
    } else {
        closeBox = <IoIosCloseCircleOutline style={{display: searching ? "inline" : "none", marginLeft: "5px" }}  onClick={props.closeClicked}/>;
    }

    return (
        <Button btnType="Box" clicked={!props.alwaysExpand ? props.clicked : null}>
            <input className={classes.SearchBox} style={{ display: searching ? "inline" : "none" }} placeholder="What are you looking for?"></input>
            <FaSearch />
            {closeBox}
        </Button>



        // <div className={classes.SearchBoxItem} onClick={props.clicked} style={{ cursor: "pointer" }}>
        //     <input className={classes.SearchBox} style={{display: props.searching ? "block":"none"}} placeholder="What are you looking for?"></input>
        //     <FaSearch />

        // </div>
    );
}



export default searchBoxItem;
