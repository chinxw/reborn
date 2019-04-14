import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import burgerBuilderReducer from './store/reducers/burgerBuilder';
// import orderReducer from './store/reducers/order';
import authReducer from './store/reducers/auth';
import clothingReducer from './store/reducers/clothing';
import checkoutReducer from './store/reducers/checkout';
import rebornReducer from './store/reducers/reborn';
import showcaseReducer from './store/reducers/showcase';
import productReducer from './store/reducers/product';

// const rootReducer = combineReducers({
//     ingredients: ingredientsReducer,
//     price: priceReducer,
// })

const composeEnhancers = compose;
// const composeEnhancers = process.env.NODE_ENV === "development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

const rootReducer = combineReducers({
    auth: authReducer,
    clothing: clothingReducer,
    checkout: checkoutReducer,
    reborn: rebornReducer,
    showcase: showcaseReducer,
    product: productReducer,
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
