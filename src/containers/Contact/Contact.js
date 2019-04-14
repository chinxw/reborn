import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Editor, EditorState, RichUtils } from 'draft-js';
// import CKEditor from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from "react-ckeditor-component";

// import Modal from '../../components/UI/Modal/Modal';
// import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
// import Spinner from '../../components/UI/Spinner/Spinner';
// import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
// import Showcase from '../../components/Showcase/Showcase';
// import ShopNowItem from '../../components/ShopNowItem/ShopNowItem';
// import Image1 from '../../assets/images/showcase1.png';
// import Image2 from '../../assets/images/dakota-johnson-beauty-river.jpg';
// import Background from '../../assets/images/COSME_Web-07.png';
// import Image2 from '../../assets/images/COSME_Web-06.png';
// import Item1Image from '../../assets/images/mac_sku_MKXM01_640x600_0.jpg';
// import Item2Image from '../../assets/images/BTPC150_5.jpg';
// import classes from './Root.css';
import * as actions from '../../store/actions/index';
import * as pathConstants from '../../shared/constants';
import classes from './Contact.css';
// import Showcase from '../../components/Showcase/Showcase';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.updateContent = this.updateContent.bind(this);
        this.state = {
            content: 'YOUR MESSAGE:',
        }
    }

    // state = {
    //     content: 'YOUR MESSAGE:',
    //     // editorState: EditorState.createEmpty(),
    // }

    updateContent = (newContent) => {
        this.setState({
            content: newContent
        })
    }

    onChange = (evt) => {
        console.log("onChange fired with event info: ", evt);
        var newContent = evt.editor.getData();
        this.setState({
            content: newContent
        })
    }

    onBlur(evt) {
        console.log("onBlur event called with event info: ", evt);
    }

    afterPaste(evt) {
        console.log("afterPaste event called with event info: ", evt);
    }

    // handleKeyCommand = (command) => {
    //     const newState = RichUtils.handleKeyCommand(this.state.editorState, command)
    //     if (newState) {
    //         this.onChange(newState);
    //         return 'handled';
    //     }
    //     return 'not-handled';
    // }

    componentDidMount() {
        this.props.onSetCurrentPath(pathConstants.PATH_CONTACT);
    }

    // onChange = (editorState) => {
    //     this.setState({
    //         editorState
    //     })
    // }

    // onUnderlineClick = () => {
    //     this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
    // }

    // onBoldClick = () => {
    //     this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'))
    // }

    // onItalicClick = () => {
    //     this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'))
    // }

    render() {

        return (
            <div className={classes.Contact} style={{ background: `url(https://lh3.google.com/u/0/d/1tLbaIBYNMTvrcqtCXaXrddJQ7Y_e2ErP) no-repeat`, backgroundSize: "cover", }}>
                <div>
                    <p className={classes.ContactUs}>{"Contact Us".toUpperCase()}</p>
                    <p className={classes.ContactUsCaption}>We'd love to hear from you</p>
                    <Input placeholder={"Name".toUpperCase()} />
                    <Input placeholder={"Email".toUpperCase()} />
                    <div className={classes.EditorContainer}>
                        <CKEditor
                            activeClass="p10"
                            content={this.state.content}
                            events={{
                                "blur": this.onBlur,
                                "afterPaste": this.afterPaste,
                                "change": this.onChange
                            }}
                        />
                    </div>

                    {/* <CKEditor
                            editor={ ClassicEditor }
                            data="<p>YOUR MESSAGE:</p>"
                            onInit={ editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log( 'Editor is ready to use!', editor );
                            } }
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                console.log( { event, editor, data } );
                            } }
                            onBlur={ editor => {
                                console.log( 'Blur.', editor );
                            } }
                            onFocus={ editor => {
                                console.log( 'Focus.', editor );
                            } }
                        /> */}
                    {/* <div className={classes.EditorContainer}>
                        <div className={classes.EditorOptions}>
                            <div>
                                <select>
                                    <option>Latio</option>
                                </select>
                            </div>
                            <div>
                                <button onClick={this.onUnderlineClick}>U</button>
                                <button onClick={this.onBoldClick}><b>B</b></button>
                                <button onClick={this.onItalicClick}><em>I</em></button>
                            </div>
                        </div>
                        <div className={classes.Editors}>
                            <Editor
                                editorState={this.state.editorState}
                                handleKeyCommand={this.handleKeyCommand}
                                onChange={this.onChange}
                                placeholder={"Your Message:".toUpperCase()}
                            />
                        </div>
                    </div> */}
                    <div>
                        <Button btnType="Box" style={{ width: "100px" }}>SEND</Button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetCurrentPath: (path) => dispatch(actions.setCurrentPath(path)),
    }
};

export default connect(null, mapDispatchToProps)(Contact);
