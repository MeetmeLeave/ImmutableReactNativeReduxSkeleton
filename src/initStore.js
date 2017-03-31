import {createStore, applyMiddleware, compose} from 'redux';

import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import socketRootSaga from './common/services/socket-saga';
import * as commonActionTypes from './common/actionTypes';

export default () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = compose(applyMiddleware(sagaMiddleware))(createStore)(rootReducer);
    sagaMiddleware.run(socketRootSaga);
    store.dispatch({type: commonActionTypes.INIT_ACTION_TYPE});

    return store
}