import * as types from '../constants/ActionTypes';
const initialState = {
    
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case types.SORT_TABLE:
        state = payload;
        return { ...state, ...payload }

    default:
        return state
    }
}
