import React from 'react';

import classes from './CheckoutItem.css';

const checkoutItem = (props) => {
    console.log(props.checkoutOptions);

    let checkoutOptionsDiv = <div></div>;
    // let totalPriceDiv = <div></div>;
    let titleSection = <p>{props.title ? props.title : null}</p>;
    let priceDiv = <div className={classes.PriceDiv}><p>{props.price ? "Price / Unit: $" + props.price.toFixed(2) : null}</p></div>;
    if (props.checkoutOptions)
        checkoutOptionsDiv =
            <div className={classes.CheckoutOptionsDiv}>
                <span>Type: <strong>{props.checkoutOptions[1].type}</strong></span>
                <span>Options: <strong>{props.checkoutOptions[1].options}</strong></span>
                <span>Quantity: <strong>{props.checkoutOptions[1].quantity}</strong></span>
            </div>

    if (props.totalPrice) {
        titleSection = <p>Total Cost</p>;
        priceDiv = <div className={classes.TotalPriceDiv}><p style={{marginTop: "-20px"}}><strong>{props.totalPrice ? "Price: $" + props.totalPrice.toFixed(2) : null}</strong></p></div>;
    }

    return (
        <div className={classes.CheckoutItem}>
            <div className={classes.imgDiv}>
                {props.src ? <img className={classes.CheckoutItemImage} src={props.src} alt={props.title} /> : null}
            </div>
            <div className={classes.detailsDiv}>
                <div>
                    <div>
                        {titleSection}
                    </div>
                    {checkoutOptionsDiv}
                    <div>
                        <p>{props.checkoutOptions ? "Save / Remove / Change" : null}</p>
                    </div>
                </div>
            </div>
            {priceDiv}
        </div>
    );

    // if (props.checkoutOptions)
    // checkoutOptionsDiv =
    //     <div className={classes.CheckoutOptionsDiv}>
    //         <span>Type: <strong>{props.checkoutOptions[1].type}</strong></span>
    //         <span>Options: <strong>{props.checkoutOptions[1].options}</strong></span>
    //         <span>Quantity: <strong>{props.checkoutOptions[1].quantity}</strong></span>
    //     </div>
    // if (props.totalPrice)
    //     totalPriceDiv =
    //         <p style={{
    //             fontFamily: "bodoni-urw, serif",
    //             fontWeight: "bold",
    //             letterSpacing: "2px",
    //             fontSize: "14px",
    //             textTransform: "uppercase",
    //         }}>
    //             <strong>{props.totalPrice ? "Price: $" + props.totalPrice.toFixed(2) : null}</strong>
    //         </p>
    // else
    //     totalPriceDiv = <p>{props.price ? "Price / Unit: $" + props.price.toFixed(2) : null}</p>
};

export default checkoutItem;