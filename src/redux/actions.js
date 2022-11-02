import {ASYNC_INCREMENT, DECREMENT, INCREMENT} from "./types";

export function incrementAC() {
    return {
        type: INCREMENT
    }
}

export function decrementAC() {
    return {
        type: DECREMENT
    }
}

export function asyncIncrementAC() {
    return function(dispatch) {
        setTimeout(() => {
            dispatch(incrementAC())
        }, 1500)
    }
}