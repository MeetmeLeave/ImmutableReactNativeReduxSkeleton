import { combineReducers } from 'redux';
import common from './common';
import message from './message';

export default combineReducers({
    [common.constants.NAME]: common.reducer,
    [message.constants.NAME]: message.reducer,
});