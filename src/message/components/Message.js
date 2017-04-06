import React, {PropTypes} from 'react';
import {Text} from 'react-native';

const Message = ({message}) => {
    return (
        <Text>{message.data}</Text>
    );
};

Message.propTypes = {
    message: PropTypes.object
};

export default Message;