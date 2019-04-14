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
import classes from './Classic.css';
import Showcase from '../../components/Showcase/Showcase';

class Classic extends Component {
    componentDidMount() {
        this.props.onSetCurrentPath(pathConstants.PATH_CLASSIC);
    }

    render() {

        return (
            <React.Fragment>
                <div className={classes.Showcase}>
                    <Showcase
                        key="asd" 
                        src="https://lh3.google.com/u/0/d/17wuasOI_s6AbTLflKf5BepVJRTBX-6lO"
                        title="asd" 
                        width="100%"/>
                </div>
                <div className={classes.Showcase}>
                    <Showcase
                        key="asd" 
                        src="https://lh3.google.com/u/0/d/1Q9hO_qZ3pe05Utc6yJnvOFHbvods18NM"
                        title="asd" 
                        width="100%"/>
                </div>
            </React.Fragment>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSetCurrentPath: (path) => dispatch(actions.setCurrentPath(path)),
    }
};

export default connect(null, mapDispatchToProps)(Classic);
