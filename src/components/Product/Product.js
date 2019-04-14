import React from 'react';
import { connect } from 'react-redux';

import Button from '../UI/Button/Button';
import classes from './Product.css';

const product = (props) => {
    console.log(props);

    return (
        <div className={classes.Product}>
            <div className={classes.Annotations}>
                <div>{props.annotations}</div>
            </div>
            <div className={classes.ProductImage}><img className={classes.Image} src={props.src} alt={props.key}/></div>
            <div className={classes.ProductDetails}>
                <div>
                    <p className={classes.Title}>{props.title}</p>
                    <p className={classes.Price}>${props.price.toFixed(2)}</p>
                    <p className={classes.Nav}><strong>Details</strong> Type Shipping</p>
                    <p className={classes.Details}>{props.details}</p>
                </div>
                {props.children}
            </div>


            {/* <table>
                <colgroup>
                    <col width="40%"></col>
                    <col width="60%"></col>
                </colgroup>
                <tbody>
                    <tr className={classes.ProductTR}>
                        <td className={classes.ImageTD}><img className={classes.Image} src={props.src} alt={props.key}></img></td>
                        <td className={classes.ImageTD2}>
                            <table style={{height: "30%"}}>
                                <tbody>
                                    <tr><td className={classes.Title}>{props.title.toUpperCase()}</td></tr>
                                    <tr><td className={classes.Price}>${props.price.toFixed(2)}</td></tr>
                                    <tr><td className={classes.Nav}><strong>DETAILS</strong> TYPE SHIPPING</td></tr>
                                    <tr><td className={classes.Details}>{props.details}</td></tr>
                                </tbody>
                            </table>
                            {props.children}
                        </td>
                    </tr>
                </tbody>
            </table> */}

            {/* <div style={{ display: "flex" }}>
                <div style={{ flex: "1" }}>
                    <img className={classes.ClothesImage} src={props.src} alt={props.title} />
                </div>
                <div style={{ flex: "1.5", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <p style={{ textTransform: "uppercase" }}>{props.title}</p>
                    <p>${props.price.toFixed(2)}</p>
                    <p style={{ letterSpacing: "6px", textTransform: "uppercase" }}><strong>Details</strong> Type Shipping</p>
                    <p>{props.details}</p>
                    <div style={{display: "flex", flexDirection: "column", padding: "0 50px", marginTop: "10px", maxWidth: "500px"}}>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                            <select style={{ width: "100px", height: "31px" }}>
                                <option>Type</option>
                            </select>
                            <select style={{ width: "100px", height: "31px" }}>
                                <option>Options</option>
                            </select>
                            <input style={{ width: "100px", height: "25px", textAlign: "center" }} type="number" placeholder="0" min="0"/>
                        </div>
                        <Button btnType="Box" clicked={props.clicked}>ADD TO CHECKOUT</Button>
                    </div>

                </div>
            </div> */}
        </div>




        // <div style={{ textAlign: 'center' }}>
        //     <div>
        //         {props.src ? <img className={classes.ClothesImage} src={props.src} alt={props.title} /> : null}
        //         <h2>{props.title ? props.title : null}</h2>
        //         <p>{props.caption ? props.caption : null}</p>
        //         <p>{props.price ? "$" + props.price.toFixed(2) : null}</p>
        //     </div>
        //     <Button btnType="Box" clicked={props.clicked}>ADD TO CHECKOUT</Button>
        // </div>
    );
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token != null,
    }
}

export default connect(mapStateToProps)(product);