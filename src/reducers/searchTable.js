import * as types from '../constants/ActionTypes';
const initialState = ''

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case types.SEARCH_TABLE:
        state = payload
        return state;

    default:
        return state
    }
}
