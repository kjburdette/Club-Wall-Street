import { SET_DESCRIPTION, SET_EMAIL, SET_FIRST_NAME, SET_LAST_NAME } from "../action-types/form-action-types"


export const setFirstName = (dispatch, inputValue) => {
    return dispatch({type: SET_FIRST_NAME, payload:inputValue})
}

export const setLastName = (dispatch, inputValue) => {
    return dispatch({type: SET_LAST_NAME, payload:inputValue})
}

export const setEmail = (dispatch, inputValue) => {
    return dispatch({type: SET_EMAIL, payload:inputValue})
}

export const setDescription = (dispatch, inputValue) => {
    return dispatch({type: SET_DESCRIPTION, payload:inputValue})
}