/* istanbul ignore file */
import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { getFirestore, reduxFirestore, firestoreReducer } from 'redux-firestore';
import { getFirebase, reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';

import './index.css';
import App from './App';
import fbConfig from './config/fbConfig';
import { BrowserRouter } from 'react-router-dom';
import authReducer from './store/reducers/auth';
import cartReducer from './store/reducers/cart';

import * as serviceWorker from './serviceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    auth: authReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    cart: cartReducer
})


const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, { attachAuthIsReady: true })
)
);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(app, document.getElementById('root'));
    serviceWorker.unregister();
})

