import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal from '../../components/UI/Modal/Modal';
// import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
// import Spinner from '../../components/UI/Spinner/Spinner';
// import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Clothes from '../../components/Clothes/Clothes';
import ClothesData from '../../components/Clothes/ClothesData/ClothesData';
import * as actions from '../../store/actions/index';

class Clothing extends Component {
    state = {
        purchasing: false,
    }

    clothesClickedHandler = (id) => {
        this.props.onSetSelectedId(id-1);
        this.setState({ purchasing: true });
    }

    checkoutCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    checkoutContinueHandler = () => {
        this.props.onCheckoutInit();
        // this.props.onAddClothingToCheckout(this.props.selectedId);
        if (this.props.isAuth) {
            this.props.history.push('/checkout');
        } else {
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth');
        }
    }

    render() {
        let clothesData = null;
        let oneCol = false;
        if (this.props.selectedId != null)
            clothesData = <ClothesData
                src={this.props.clothesList[this.props.selectedId].src}
                title={this.props.clothesList[this.props.selectedId].title}
                caption={this.props.clothesList[this.props.selectedId].caption}
                price={this.props.clothesList[this.props.selectedId].price}
                cancel={this.checkoutCancelHandler}
                continue={this.checkoutContinueHandler}
            />

        return (
            <React.Fragment>
                <div style={{ textAlign: "center" }}>
                    {this.props.clothesList.map((clothes, index) => {
                        oneCol = false;
                        if (this.props.clothesList.length === (index + 1) && this.props.clothesList.length % 2 === 1)
                            oneCol = true;

                        return <Clothes
                            key={clothes.id}
                            src={clothes.src}
                            title={clothes.title}
                            caption={clothes.caption}
                            price={clothes.price}
                            oneCol={oneCol}
                            clicked={() => this.clothesClickedHandler(clothes.id)}></Clothes>;
                    })}
                </div>
                <Modal show={this.state.purchasing} modalClosed={this.checkoutCancelHandler}>
                    {clothesData}
                </Modal>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token != null,
        clothesList: state.clothing.clothesList,
        selectedId: state.clothing.selectedId,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path)),
        onSetSelectedId: (selectedId) => dispatch(actions.setSelectedId(selectedId)),
        // onAddClothingToCheckout: (selectedId) => dispatch(actions.addClothingToCheckout(selectedId)),
        onCheckoutInit: () => dispatch(actions.checkoutInit()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Clothing);