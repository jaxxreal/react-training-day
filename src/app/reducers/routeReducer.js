import { LOCATION_CHANGE } from 'react-router-redux';

const INITIAL_STATE = {
    locationBeforeTransitions: null,
};

const RouteReducer = (state = INITIAL_STATE,
                      action = { type: null, payload: null }) => {
    switch (action.type) {
        case LOCATION_CHANGE:
            return { ...state, locationBeforeTransitions: action.payload };
        default:
            return state;
    }
};

export default RouteReducer;
