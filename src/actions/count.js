import {
    INCREMENT_REQUESTED,
    INCREMENT
} from '../constant';

export const increment = () => {
    return dispatch => {
        dispatch({
            type: INCREMENT_REQUESTED
        })

        dispatch({
            type: INCREMENT
        })
    }
};

export const incrementAsync = () => {
    return dispatch => {
        dispatch({
            type: INCREMENT_REQUESTED
        })

        return setTimeout(() => {
            dispatch({
                type: INCREMENT
            })
        }, 3000)
    }
};