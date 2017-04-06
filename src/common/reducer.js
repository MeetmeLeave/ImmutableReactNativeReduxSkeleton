import { ActionConst } from 'react-native-router-flux';
import Immutable from 'immutable';

import initState from '../initState';

export default function reducer(scene = initState.scene, action = {}) {
    switch (action.type) {
        case ActionConst.FOCUS:
            return new Immutable.Map(scene);
        default:
            return scene;
    }
}