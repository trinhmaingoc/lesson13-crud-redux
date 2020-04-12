import * as types from '../constants/ActionTypes';
const initialState = false;

export default (state = initialState, { type }) => {
    switch (type) {

    case types.TOGGLE_FORM:
        return !state;
    
    case types.OPEN_FORM:
        return true;

    case types.CLOSE_FORM:
        return false;

    default:
        return state;
    }
}
