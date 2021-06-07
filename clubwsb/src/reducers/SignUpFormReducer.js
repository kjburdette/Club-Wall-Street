import { SET_DESCRIPTION, SET_EMAIL, SET_FIRST_NAME, SET_LAST_NAME } from "../action-types/form-action-types";


const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    description: ""
}

function formReducer(state=initialState, action) {
    switch (action.type){
        case SET_FIRST_NAME:
            return  {...state, firstName: action.payload};
        case SET_LAST_NAME:
            return {...state, lastName: action.payload};
        case SET_EMAIL:
            return {...state, email: action.payload};
        case SET_DESCRIPTION:
            return {...state, description: action.payload};
        default:
            return state;
    }
}

export default formReducer;