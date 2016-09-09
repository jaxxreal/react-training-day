import { combineReducers } from 'redux';

import routing from './routeReducer';
import counter from './counter';
import users from './users';

const rootReducer = combineReducers({
    routing,
    counter,
    users,
    // add here other reducers
});

export default rootReducer;
