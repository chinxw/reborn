import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import CheckoutItem from '../../components/Checkout/CheckoutItem/CheckoutItem';
import Button from '../../components/UI/Button/Button';
import * as pathConstants from '../../shared/constants';

class Checkout extends Component {

    checkoutCancelledHandler = () => {
        this.props.history.push(pathConstants.PATH_SHOP);
    }

    checkoutContinuedHandler = () => {
        alert("Pay Now");
        // this.props.history.replace('/checkout/contact-data');
    }

    render() {
        // return (
        //     <div style={{ padding: "30px" }}>
        //         <div style={{ display: "flex" }}>
        //             <div style={{ flex: "1" }}>
        //                 <img className={classes.ClothesImage} src={props.src} alt={props.title} />
        //             </div>
        //             <div style={{ flex: "1.5", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        //                 <p style={{ textTransform: "uppercase" }}>{props.title}</p>
        //                 <p>${props.price.toFixed(2)}</p>
        //                 <p style={{ letterSpacing: "6px", textTransform: "uppercase" }}><strong>Details</strong> Type Shipping</p>
        //                 <p>{props.details}</p>
        //                 <div style={{display: "flex", flexDirection: "column", padding: "0 50px", marginTop: "10px", maxWidth: "500px"}}>
        //                     <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
        //                         <select style={{ width: "100px", height: "31px" }}>
        //                             <option>Type</option>
        //                         </select>
        //                         <select style={{ width: "100px", height: "31px" }}>
        //                             <option>Options</option>
        //                         </select>
        //                         <input style={{ width: "100px", height: "25px", textAlign: "center" }} type="number" placeholder="0" min="0"/>
        //                     </div>
        //                     <Button btnType="Box" clicked={props.clicked}>ADD TO CHECKOUT</Button>
        //                 </div>

        //             </div>
        //         </div>
        //     </div>
        // )

        // console.log(this.props.checkoutProduct);
        let totalPrice = 0;
        let checkoutData = <p>There is nothing in checkout, please click on clothing to make a selection!</p>;
        if (this.props.checkoutProduct.length) {
            checkoutData = this.props.checkoutProduct.map((product, index) => {
                // console.log(product);

                totalPrice += (product.checkoutData.quantity * this.props.productList[product.id].price);
                return <CheckoutItem
                    key={index}
                    src={this.props.productList[product.id].img}
                    title={this.props.productList[product.id].title}
                    caption={this.props.productList[product.id].details}
                    price={this.props.productList[product.id].price}
                    checkoutOptions={Object.values(product)}
                ></CheckoutItem>;
            });

            checkoutData.push(
                <div key="asd" style={{ padding: "10px" }}>
                    <CheckoutItem totalPrice={totalPrice}></CheckoutItem>
                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                            <Button
                                btnType="Box"
                                style={{ padding: "5px 50px", border: "none" }}
                                clicked={this.checkoutCancelledHandler}
                            >Continue Shopping</Button>
                            <Button
                                btnType="Box"
                                style={{ padding: "5px 50px" }}
                                clicked={this.checkoutContinuedHandler}
                            >Pay Now</Button>
                    </div>
                </div>
            )
        }

        return checkoutData;
    }
}

const mapStateToProps = state => {
    return {
        selectedId: state.clothing.selectedId,
        checkoutProduct: state.checkout.checkoutProduct,
        productList: state.product.productList,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        // onAddClothingToCheckout: (selectedId) => dispatch(actions.addClothingToCheckout(selectedId)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);