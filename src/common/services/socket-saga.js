import { eventChannel } from 'redux-saga';
import { put, take, call, fork } from 'redux-saga/effects';

import * as commonActionTypes from '../actionTypes';
import * as messagesActionTypes from '../../message/actionTypes';
import * as messagesActions from '../../message/actions';

/* eslint-disable no-constant-condition */
/* eslint-disable require-yield */

function connect() {
    const socket = new WebSocket('ws://localhost:8090');
    return new Promise(resolve => {
        socket.addEventListener('open', () => {
            resolve(socket);
        });
    });
}

function* subscribeToSocketEventChannel(socket) {
    return eventChannel(emitter => {
        socket.send(`{"type" : "${messagesActionTypes.LOAD}"}`);

        socket.addEventListener('message', message => {
            const object = JSON.parse(message.data);
            switch (object.type) {
                case messagesActionTypes.LOADED:
                    emitter(messagesActions.loaded(object.messages));
                    break;
            }
        });

        return () => {};
    });
}

function* handleInput(socket) {
    while (true) {
        const action = yield take([messagesActionTypes.LOAD]);
        socket.send(JSON.stringify(action));
    }
}

function* handleOutput(socket) {
    const socketEventChannel = yield call(subscribeToSocketEventChannel, socket);
    while (true) {
        const message = yield take(socketEventChannel);
        yield put(message);
    }
}

function* handleSocket(socket) {
    yield fork(handleOutput, socket);
    yield fork(handleInput, socket);
}

export default function* socketRootSaga() {
    while (true) {
        const connectEvent = yield take(commonActionTypes.INIT_ACTION_TYPE);
        const socket = yield call(connect);
        const task = yield fork(handleSocket, socket);
    }
}