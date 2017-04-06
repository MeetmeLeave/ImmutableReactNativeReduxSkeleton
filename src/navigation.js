import React, {Component} from 'react';
import {Scene, Actions} from 'react-native-router-flux';
import message from './message/components/';

const Navigation = Actions.create(
    <Scene key="root">
        <Scene key="messages" component={message.MessagesBoard} title="Messages"/>
    </Scene>
);

export default Navigation;