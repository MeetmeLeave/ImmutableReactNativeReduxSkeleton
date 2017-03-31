import Immutable from 'immutable';
import initState from '../initState';
import * as actionTypes from './actionTypes';

export default function (state = initState.messages, action) {
    switch (action.type) {
        case actionTypes.LOADED:
            return new Immutable.List(action.messages);
    }

    return state;
}