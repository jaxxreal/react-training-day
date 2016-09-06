import { combineReducers } from 'redux-immutable';

import routing from './immutableRouter';

const rootReducer = combineReducers({
    routing,
});

export default rootReducer;
