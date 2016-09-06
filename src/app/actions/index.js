import { ActionCreator, Dispatch } from "redux";

import ActionType from "../constants/ActionTypes";
import { States } from "../api/states";

var scroll = require('scroll');

export const increment: ActionCreator = () => ({ type: ActionType.INCREMENT });
export const decrement: ActionCreator = () => ({ type: ActionType.DECREMENT });

export const newViewport: ActionCreator = (data: {
    screenWidth?: number;
    screenHeight?: number;
    scrollOffset?: number;
}) => ({ type: ActionType.NEW_VIEWPORT, payload: data });

export const getStates: ActionCreator = () => (dispatch: Dispatch) => States()
    .then((response: Response) => dispatch({
        type: ActionType.SET_STATES_LIST,
        payload: response
    }));

export function animatedScrollToTop() {
    setTimeout(()=> scroll.top(document.body, 0, { duration: 1000 }));
}
