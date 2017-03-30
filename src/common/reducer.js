import { ActionConst } from 'react-native-router-flux';
import Immutable from 'immutable';

import initState from '../initState';

export default function reducer(state = initState.scene, action = {}) {
    switch (action.type) {
        // focus action is dispatched when a new screen comes into focus
        case ActionConst.FOCUS:
            return new Immutable.Map(scene);
        default:
            return state;
    }
}