import React, {Component, PropTypes} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ListOfMessages from './ListOfMessages';
import * as messageActions from '../actions';

class MessagesBoard extends Component {
    render() {
        return (
            <View style={{
                margin: 128
            }}>
                <Text>This is MessageBoard!</Text>
                <ListOfMessages listOfMessages={this.props.messages}/>
            </View>
        );
    }
}

MessagesBoard.propTypes = {
    messages: PropTypes.array
};

function mapStateToProps(state, ownProps) {
    return {
        messages: state
            .messages
            .toArray()
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(messageActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesBoard);