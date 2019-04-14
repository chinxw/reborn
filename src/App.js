import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';
import * as pathConstants from './shared/constants';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

// const asyncCheckout = asyncComponent(() => { return import('./containers/Checkout/Checkout'); });
// const asyncOrders = asyncComponent(() => { return import('./containers/Orders/Orders'); });
const asyncAuth = asyncComponent(() => { return import('./containers/Auth/Auth'); });
const asyncClothing = asyncComponent(() => { return import('./containers/Clothing/Clothing'); });

const asyncReborn = asyncComponent(() => { return import('./containers/Reborn/Reborn'); });
const asyncClassic = asyncComponent(() => { return import('./containers/Classic/Classic'); });
const asyncShop = asyncComponent(() => { return import('./containers/Shop/Shop'); });
const asyncCheckout = asyncComponent(() => { return import('./containers/Checkout/Checkout'); });
const asyncContact = asyncComponent(() => { return import('./containers/Contact/Contact'); });
const asyncShopProduct = asyncComponent(() => { return import('./containers/Shop/ShopProduct/ShopProduct'); });

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={asyncAuth} />
        <Route path={pathConstants.PATH_CONTACT} component={asyncContact} />
        <Route path={pathConstants.PATH_SHOP_PRODUCT} component={asyncShopProduct} />
        <Route path={pathConstants.PATH_SHOP} component={asyncShop} />
        <Route path={pathConstants.PATH_CLASSIC} component={asyncClassic} />
        <Route path={pathConstants.PATH_CHECKOUT} component={asyncCheckout} />
        <Route path={pathConstants.PATH_REBORN} exact component={asyncReborn} />
        <Redirect to={pathConstants.PATH_REBORN} />
      </Switch>
    );

    // if (this.props.isAuthenticated) {
    //   routes =
    //     <Switch>
    //       <Route path="/checkout" component={asyncCheckout} />
    //       <Route path="/clothing" component={asyncClothing} />
    //       <Route path="/logout" component={Logout} />
    //       <Route path="/auth" component={asyncAuth} />
    //       <Route path="/" exact component={asyncReborn} />
    //       <Redirect to="/" />
    //     </Switch>
    // }

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token != null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
