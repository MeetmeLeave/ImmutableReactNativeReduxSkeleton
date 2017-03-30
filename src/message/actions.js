import * as actionTypes from './actionTypes';

export const load = () => ({
    meta: {
        remote: true
    },
    type: actionTypes.LOAD
});
export const loaded = (messages) => ({ type: actionTypes.LOADED, messages });