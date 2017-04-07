import * as messageActionTypes from '../src/message/actionTypes';

export default class SocketServer {
    constructor() {
        const WebSocketServer = require('ws').Server,
            wss = new WebSocketServer({port: 8090});

        wss.on('connection', (socket) => {
            new SocketClient(socket);
        });
    }
}

class SocketClient {
    constructor(socket) {
        socket.on('message', (e) => {
            const action = JSON.parse(e);
            this.handleAction(socket, action);
        });
    }

    handleAction(socket, action) {
        let reply = {};
        switch (action.type) {
            case messageActionTypes.LOAD:
                reply.type = messageActionTypes.LOADED;
                reply.messages = [
                    {
                        data: 'test 1'
                    }, {
                        data: 'test 2'
                    }, {
                        data: 'test 3'
                    }, {
                        data: 'test 4'
                    }, {
                        data: 'test 5'
                    }, {
                        data: 'test 6'
                    }
                ];
                socket.send(JSON.stringify(reply));
                break;
        }
    }
};