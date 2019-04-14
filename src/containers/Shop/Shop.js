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
import * as actions from '../../store/actions/index';
import * as pathConstants from '../../shared/constants';
import ProductCompact from '../../components/Product/ProductCompact/ProductCompact';

// import classes from './Shop.css';
// import Showcase from '../../components/Showcase/Showcase';
// import Image1 from '../../assets/images/cgaxis_models_101_28a.jpg';
// import Button from '../../components/UI/Button/Button';
// import Input from '../../components/UI/Input/Input';
// import { updateObject, checkValidity } from '../../shared/utility';


class Shop extends Component {
    onProductClicked = (selectedProductId) => {
        this.props.onSetProductSelectedId(selectedProductId);
        this.props.history.push(pathConstants.PATH_SHOP_PRODUCT);
    }

    render() {
        return (
            <React.Fragment>
                <div style={{padding: "50px"}}>
                    {this.props.productList.map((product, index) => (
                        <ProductCompact key={index} src={product.img} title={product.title} details={product.details} clicked={() => this.onProductClicked(index)}></ProductCompact>
                    ))}
                </div>
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
        onSetProductSelectedId: (selectedId) => dispatch(actions.setProductSelectedId(selectedId)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
