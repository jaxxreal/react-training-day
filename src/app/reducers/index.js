import { combineReducers } from 'redux-immutable';

import routing from './routeReducer';
import counter from './counter';

const rootReducer = combineReducers({
    routing,
    counter,
    // add here other reducers
});

export default rootReducer;
