import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Navigation from './navigation';
import {Router, Scene, Actions} from 'react-native-router-flux';
import initStore from './initStore';

// const RouterWithRedux = connect()(Router);

const App = () => {
    return (
        <Provider store={initStore()}>
            <Router scenes={Navigation} sceneStyle={{ backgroundColor: 'white' }}>
            </Router>
        </Provider >
    );
}

export default App;