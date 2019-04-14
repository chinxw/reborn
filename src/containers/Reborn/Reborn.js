import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Modal from '../../components/UI/Modal/Modal';
// import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
// import Spinner from '../../components/UI/Spinner/Spinner';
// import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Showcase from '../../components/Showcase/Showcase';
// import ShopNowItem from '../../components/ShopNowItem/ShopNowItem';
// import Image1 from '../../assets/images/showcase1.png';
// import Image2 from '../../assets/images/dakota-johnson-beauty-river.jpg';
// import Image3 from '../../assets/images/COSME_Web-09.png';
// import Image3 from '../../assets/images/COSME_Web-12.png';
// import Item1Image from '../../assets/images/mac_sku_MKXM01_640x600_0.jpg';
// import Item2Image from '../../assets/images/BTPC150_5.jpg';
import classes from './Reborn.css';
import * as actions from '../../store/actions/index';
import * as pathConstants from '../../shared/constants';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Button from '../../components/UI/Button/Button';
import ProductCompact from '../../components/Product/ProductCompact/ProductCompact';
import Image from '../../components/UI/Image/Image';

// const showcase = [
//     {
//         id: "sc1",
//         src: Image1,
//     },
//     {
//         id: "sc2",
//         src: Image2,
//     },
// ];

// const items = [
//     {
//         id: "Item1",
//         src: Item1Image,
//         description: {
//             title: "Essential oils",
//             caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis dolor ut sapien tincidunt aliquet ac quis neque.",
//         }
//     },
//     {
//         id: "item2",
//         src: Item2Image,
//         description: {
//             title: "Essential oils",
//             caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis dolor ut sapien tincidunt aliquet ac quis neque.",
//         }
//     },
// ]

class Reborn extends Component {
    componentDidMount() {
        this.props.onSetCurrentPath(pathConstants.PATH_REBORN);
        this.props.onShowcaseInit();
        this.props.onProductInit();
        this.props.onCheckoutInit();

        // console.log(this.props.productList);
    }

    selectDot = (el) => {
        console.log(el.target);
        document.querySelectorAll(".Dots .active")

    }

    showcasePrevImage = () => {
        if (this.props.showcaseSelectedId === 0) {
            this.props.onSetShowcaseSelectedId(Object.keys(this.props.showcaseList).length - 1);
        } else {
            this.props.onSetShowcaseSelectedId(this.props.showcaseSelectedId - 1);
        }
    }

    showcaseNextImage = () => {
        if (this.props.showcaseSelectedId === Object.keys(this.props.showcaseList).length - 1) {
            this.props.onSetShowcaseSelectedId(0);
        } else {
            this.props.onSetShowcaseSelectedId(this.props.showcaseSelectedId + 1);
        }
    }

    onProductClicked = (selectedProductId) => {
        this.props.onSetProductSelectedId(selectedProductId);
        this.props.history.push(pathConstants.PATH_SHOP_PRODUCT);
    }

    shopNowClickedHandler = () => {
        this.props.history.push(pathConstants.PATH_SHOP);
    }

    render() {
        // {salad: true, meat: false, ...}
        const selectedShowcase = this.props.showcaseList[this.props.showcaseSelectedId];
        // let showcaseWidth = "50%";
        // if (selectedShowcase.imgs.length === 3)
        //     showcaseWidth = "33.33%";

        let showcaseMini = [];
        for (let i = 0; i < Object.keys(this.props.showcaseMini).length;i++) {
            let tmp = this.props.showcaseMini[i];
            console.log(tmp);
            showcaseMini.push(<Showcase 
                key={tmp.id + "_" + i} 
                src={tmp.imgs[0][0].src} 
                portraitSrc={tmp.imgs[0][0].portraitSrc} 
                annotations={tmp.imgs[0][0].annotations} 
                title={tmp.id} 
                defaultLayout="DefaultPortrait"
                divStyle={tmp.divStyle}/>);
        }
        return (
            <React.Fragment>
                <div className={classes.Showcase}>
                    {selectedShowcase.imgs.map((img, index) => {
                        console.log(img.length);
                        return img.map(imgData => (
                            <Showcase 
                                key={selectedShowcase.id + "_" + index} 
                                src={imgData.src} 
                                portraitSrc={imgData.portraitSrc} 
                                annotations={imgData.annotations} 
                                title={selectedShowcase.id} 
                                // defaultLayout="DefaultPortrait"
                                divStyle={selectedShowcase.divStyle}/>
                        ))
                    })}
                    <div className={classes.ShowcaseNavigation}>
                        <Button clicked={this.showcasePrevImage} style={{ margin: "0px", padding: "0px" }}><IoIosArrowBack style={{ opacity: "0.3", color:"white" }} size={40} /></Button>
                        <Button clicked={this.showcaseNextImage} style={{ margin: "0px", padding: "0px" }}><IoIosArrowForward style={{ opacity: "0.3", color:"white" }} size={40} /></Button>
                    </div>
                    {/* {.map((showcase) => {

                        
                        // return 
                        // if (showcase.cols === 1) {
                        //     return (
                        //         <div className={classes.ShowcaseGallery}>
                        //             <Showcase key={showcase.id} cols={showcase.cols} imgLeft={showcase.colData.left} title={showcase.id} />
                        //         </div>
                        //     );
                        // } else {
                        //     return (
                        //         <div className={classes.ShowcaseGallery}>
                        //             <Showcase key={showcase.id} cols={showcase.cols} imgLeft={showcase.colData.left} imgRight={showcase.colData.right} title={showcase.id} />
                        //         </div>
                        //     );
                        // }
                    })} */}

                </div>
                <div className={classes.DotsContainer}>
                    <ul className={classes.Dots}>
                        {Object.values(this.props.showcaseList).map((showcase, index) => {
                            if (index === this.props.showcaseSelectedId) {
                                return <li key={index} className={classes.active}><a href="true" onClick={(e) => { e.preventDefault(); this.props.onSetShowcaseSelectedId(index); }}>{index}</a></li>
                            } else {
                                return <li key={index}><a href="true" onClick={(e) => { e.preventDefault(); this.props.onSetShowcaseSelectedId(index); }}>{index}</a></li>
                            }
                        })}
                    </ul>
                </div>
                <div className={classes.ShowcaseMini}>
                    {showcaseMini}
                </div>
                <div className={classes.ShopNow}>
                    <div className={classes.ShopNowLeft}>
                        {/* className={classes.ShopNowImage}  */}
                        <Image
                            // className={classes.ShopNowImage}
                            src="https://lh3.google.com/u/0/d/1mLsAbNm8GWzyJQ1zsnXt7Q650IQXEw3J"
                            alt="Shop Now"
                            divStyle={{
                                width: "100%",
                                height: "100%",
                            }}
                            imgStyle={{
                                width: "100%",
                                height: "100%",
                            }}
                            annotations={
                                <React.Fragment>
                                    <div style={{
                                        marginLeft: "40%",
                                        height: "60%",
                                        display: "flex",
                                        textAlign: "right",
                                        alignItems: "flex-end",
                                        fontFamily: "bodoni-urw, serif",
                                        textTransform: "uppercase",
                                        width: "50%",
                                        fontWeight: "bold",
                                        fontSize: "3vw",
                                        lineHeight: "50px",
                                        color: "white",
                                        }}>
                                        Shop with Deep SkinCare Experts
                                    </div>
                                    <div style={{
                                        marginLeft: "60%",
                                        height: "75%",
                                        display: "flex",
                                        textAlign: "right",
                                        alignItems: "flex-end",
                                        fontFamily: "bodoni-urw, serif",
                                        width: "60%",
                                        fontWeight: "bold",
                                        fontSize: "1.5vw",
                                        }}>
                                        <Button
                                            btnType="Box"
                                            style={{ textTransform: "uppercase", padding: "10px 20px", color: "white", border: "2px solid white" }}
                                            clicked={this.shopNowClickedHandler}
                                        >Shop Now</Button>
                                    </div>
                                </React.Fragment>
                            }
                        />
                        {/* <img className={classes.ShopNowImage} src={Image3} alt="Shop Now"/> */}
                    </div>
                    <div className={classes.ShopNowRight}>
                        {/* <div className={classes.ShowNowRightAnnotations}>
                            <div>Scroll for more</div>
                        </div> */}
                        <div className={classes.ShopNowRightContent}>
                            <div>
                                {this.props.productList.map((product, index) => (
                                    <ProductCompact key={index} src={product.img} title={product.title} details={product.details} clicked={() => this.onProductClicked(index)}></ProductCompact>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* using inline-block */}
                {/* <div style={{ marginTop: "10px" }}>
                    <div className={classes.ShopNowLeft}>
                        <span className={classes.Helper} style={{ height: "100%" }}></span>
                        <img className={classes.ShopNowImage} src={Image3} alt="Shop Now" />
                    </div>
                    <div className={classes.ShopNowRight}>
                        <div>
                            <div>
                                {this.props.productList.map((product, index) => (
                                    <ProductCompact key={index} src={product.img} title={product.title} details={product.details} clicked={() => this.onProductClicked(index)}></ProductCompact>
                                ))}
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* <div style={{ padding: "20px 20px 0 20px" }}> */}
                {/* <span className={classes.Helper} style={{ height: "0px" }}></span> */}
                {/* </div> */}
                {/* <div className={classes.ShopNowSection}>
                    <div className={classes.ShopNowImageDiv}>
                        <img className={classes.ShopNowImage} src={Image3} alt="Shop Now" />
                    </div>
                    <div className={classes.ShopItemsDiv}>
                        <div className={classes.ShopItemsListContainer}>
                            <div className={classes.ShopItemsList}>
                                {items.map((item) => {
                                    return <ShopNowItem key={item.id} src={item.src} title={item.description.title} caption={item.description.caption} />;
                                    // if (showcase.cols === 1) {
                                    //     return (
                                    //         <div className={classes.ShowcaseGallery}>
                                    //             <Showcase key={showcase.id} cols={showcase.cols} imgLeft={showcase.colData.left} title={showcase.id} />
                                    //         </div>
                                    //     );
                                    // } else {
                                    //     return (
                                    //         <div className={classes.ShowcaseGallery}>
                                    //             <Showcase key={showcase.id} cols={showcase.cols} imgLeft={showcase.colData.left} imgRight={showcase.colData.right} title={showcase.id} />
                                    //         </div>
                                    //     );
                                    // }
                                })}
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className={classes.Root}>
                </div>
                {/* {promotions.map((promotion) => {
                    return <Promotion
                        key={promotion.id}
                        src={promotion.options.src}
                        title={promotion.options.title}
                        caption={promotion.options.caption}></Promotion>;
                })} */}
                {/* <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    
                </Modal> */}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        showcaseList: state.showcase.showcaseList,
        showcaseMini: state.showcase.showcaseMini,
        showcaseSelectedId: state.showcase.selectedId,
        productList: state.product.productList,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onSetCurrentPath: (path) => dispatch(actions.setCurrentPath(path)),
        onShowcaseInit: () => dispatch(actions.showcaseInit()),
        onSetShowcaseSelectedId: (selectedId) => dispatch(actions.setShowcaseSelectedId(selectedId)),
        onProductInit: () => dispatch(actions.productInit()),
        onSetProductSelectedId: (selectedId) => dispatch(actions.setProductSelectedId(selectedId)),
        onCheckoutInit: () => dispatch(actions.checkoutInit()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Reborn);

//get a home screen working with hard coded promotions