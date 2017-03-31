import React from 'react';
import {Text} from 'react-native';

const Message = ({message}) => {
    return (
        <Text>{message.data}</Text>
    );
};

export default Message;