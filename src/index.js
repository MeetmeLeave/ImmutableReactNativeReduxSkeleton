import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect, Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import socketRootSaga from './common/services/socket-saga';
import * as commonActionTypes from './common/actionTypes';
import Navigation from './navigation';
import {Router, Scene, Actions} from 'react-native-router-flux';

import message from './message/components/';

// const RouterWithRedux = connect()(Router);
import rootReducer from './rootReducer';
const sagaMiddleware = createSagaMiddleware();
const store = compose(applyMiddleware(sagaMiddleware))(createStore)(rootReducer);
sagaMiddleware.run(socketRootSaga);
store.dispatch({type: commonActionTypes.INIT_ACTION_TYPE});

const App = () => {
    return (
        <Provider store={store}>
            <Router scenes={Navigation} sceneStyle={{ backgroundColor: 'white' }}>
            </Router>
        </Provider >
    );
}

export default App;