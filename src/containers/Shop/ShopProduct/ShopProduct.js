import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Modal from '../../components/UI/Modal/Modal';
// import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
// import Spinner from '../../components/UI/Spinner/Spinner';
// import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
// import Showcase from '../../components/Showcase/Showcase';
// import ShopNowItem from '../../components/ShopNowItem/ShopNowItem';
// import Image1 from '../../assets/images/showcase1.png';
// import Image2 from '../../assets/images/dakota-johnson-beauty-river.jpg';
// import Image1 from '../../assets/images/COSME_Web-05.png';
// import Image2 from '../../assets/images/COSME_Web-06.png';
// import Item1Image from '../../assets/images/mac_sku_MKXM01_640x600_0.jpg';
// import Item2Image from '../../assets/images/BTPC150_5.jpg';
// import classes from './Root.css';
import * as actions from '../../../store/actions/index';
import * as pathConstants from '../../../shared/constants';
import Product from '../../../components/Product/Product';
// import classes from './Shop.css';
// import Showcase from '../../components/Showcase/Showcase';
// import Image1 from '../../assets/images/cgaxis_models_101_28a.jpg';
import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';
import { updateObject, checkValidity } from '../../../shared/utility';


class ShopProduct extends Component {
    state = {
        addToCheckoutForm: {
            type: {
                elementType: 'select',
                elementConfig: {
                    placeholder: "Type",
                    options: [
                        { value: 'oil', displayValue: 'Oil' },
                        { value: 'body_care', displayValue: 'Body Care' },
                    ]
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            options: {
                elementType: 'select',
                elementConfig: {
                    placeholder: "Option",
                    options: [
                        { value: 'buy', displayValue: 'Buy' },
                        { value: 'rent', displayValue: 'Rent' },
                    ]
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            quantity: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: '',
                    min: 0,
                },
                value: '1',
                validation: {
                    required: true,
                },
                valid: true,
                touched: false,
            },
        },
        formIsValid: false,
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updateFormElement = updateObject(this.state.addToCheckoutForm[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, this.state.addToCheckoutForm[inputIdentifier].validation),
            touched: true,
        })
        const updatedAddToCheckoutForm = updateObject(this.state.addToCheckoutForm, {
            [inputIdentifier]: updateFormElement,
        });

        let formIsValid = true;
        for (let inputIdentifier in updatedAddToCheckoutForm) {
            formIsValid = updatedAddToCheckoutForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({ addToCheckoutForm: updatedAddToCheckoutForm, formIsValid: formIsValid });
    }

    componentDidMount() {
        this.props.onSetCurrentPath(pathConstants.PATH_SHOP);
    }

    addToCheckoutClicked = () => {
        // const productToAdd = {
        //     id: this.props.selectedProductId,
        //     // type: 
        // }
        // this.props.onAddProductToCheckout(this.props.selectedProductId);
        // this.props.history.push(pathConstants.PATH_CHECKOUT);
    }

    checkoutHandler = (event) => {
        event.preventDefault();
        // this.setState({ loading: true });

        const formData = {};
        for (let formElementIdentifier in this.state.addToCheckoutForm)
            formData[formElementIdentifier] = this.state.addToCheckoutForm[formElementIdentifier].value;
        
        const productToAdd = {
            id: this.props.selectedProductId,
            checkoutData: formData,
        }

        this.props.onAddProductToCheckout(productToAdd);
        this.props.history.push(pathConstants.PATH_CHECKOUT);

        // const order = {
        //     price: this.props.storedPrice,
        //     checkoutData: formData,
        // }

        // this.props.onOrderBurger(order, this.props.token);
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.addToCheckoutForm) {
            formElementsArray.push({
                id: key,
                config: this.state.addToCheckoutForm[key],
            });

        }
        return (
            <React.Fragment>
                <Product
                    key={this.props.productList[this.props.selectedProductId].id}
                    title={this.props.productList[this.props.selectedProductId].title}
                    details={this.props.productList[this.props.selectedProductId].details}
                    src={this.props.productList[this.props.selectedProductId].img}
                    price={this.props.productList[this.props.selectedProductId].price}
                    annotations={this.props.productList[this.props.selectedProductId].annotationsText}
                    clicked={this.addToCheckoutClicked}>

                    <form onSubmit={this.checkoutHandler}>
                        <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", maxWidth: "800px" }}>

                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
                                {formElementsArray.map(formElement => (
                                    <Input
                                        key={formElement.id}
                                        elementType={formElement.config.elementType}
                                        elementConfig={formElement.config.elementConfig}
                                        value={formElement.config.value}
                                        invalid={!formElement.config.valid}
                                        shouldValidate={formElement.config.validation}
                                        touched={formElement.config.touched}
                                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                                ))}
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <Button
                                    btnType="Box"
                                    style={{ padding: "5px 50px" }}
                                    disabled={!this.state.formIsValid}
                                >ADD TO CHECKOUT</Button>
                            </div>
                        </div>
                    </form>
                </Product >
            </React.Fragment >
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedProductId: state.product.selectedProductId,
        productList: state.product.productList,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddProductToCheckout: (selectedId) => dispatch(actions.addProductToCheckout(selectedId)),
        onSetCurrentPath: (path) => dispatch(actions.setCurrentPath(path)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopProduct);
