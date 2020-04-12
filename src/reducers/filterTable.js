import * as types from '../constants/ActionTypes';
const initialState = {
    name: '',
    status: -1
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case types.FILTER_TABLE:
        state = {
            ...payload,
            status: parseInt(payload.status)
        };
        return { ...state }

    default:
        return state
    }
}
