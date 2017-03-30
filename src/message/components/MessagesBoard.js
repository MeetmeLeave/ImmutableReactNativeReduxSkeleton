import React, {Component, PropTypes} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as messageActions from '../actions';

class MessagesBoard extends Component {
    render() {
        return (
             <View style={{margin: 128}}>
                <Text>This is MessageBoard!</Text>
            </View>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        ...state,
        ...ownProps,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(messageActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesBoard);