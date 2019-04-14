import React, { Component } from 'react';

// import Modal from '../../components/UI/Modal/Modal';
// import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
// import Spinner from '../../components/UI/Spinner/Spinner';
// import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Promotion from '../../components/Promotion/Promotion';

const promotions = [
    {
        id: "img1",
        options: {
            src: 'https://www.hm.com/nt-south/uploads/2019/03/5148A-autumn-rays-3x2-768x512.jpg',
            title: 'AUTUM RAYS',
        }
    },
    {
        id: "text1",
        options: {
            title: 'PROMOTION TITLE',
            caption: 'very small text below',
        }
    },
    {
        id: "img2",
        options: {
            src: 'https://www.hm.com/nt-south/uploads/2019/03/5148A-autumn-rays-CPD-1-768x512.jpg',
            title: 'AUTUM RAYS',
            caption: 'Hues of golden honey, laid-back fits and \'70s inspired ensembles — a collection celebrating the new season with crisp, new must-haves.',
        }
    },
];

class Promotions extends Component {
    render() {
        // {salad: true, meat: false, ...}
        return (
            <React.Fragment>
                {promotions.map((promotion) => {
                    return <Promotion
                        key={promotion.id}
                        src={promotion.options.src}
                        title={promotion.options.title}
                        caption={promotion.options.caption}></Promotion>;
                })}
                {/* <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    
                </Modal> */}
            </React.Fragment>
        );
    }
}

export default Promotions;

//get a home screen working with hard coded promotions