import {ASYNC_INCREMENT, CHANGE_THEME, DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT} from "./types";

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

export function enableButtonsAC() {
    return {
        type: ENABLE_BUTTONS
    }
}

export function disableButtonsAC() {
    return {
        type: DISABLE_BUTTONS
    }
}

export function changeThemeAC(newTheme) {
    return {
        type: CHANGE_THEME,
        payload: newTheme
    }
}

export function asyncIncrementAC() {
    return function(dispatch) {
        dispatch(disableButtonsAC())
        setTimeout(() => {
            dispatch(incrementAC())
            dispatch(enableButtonsAC())
        }, 1500)
    }
}