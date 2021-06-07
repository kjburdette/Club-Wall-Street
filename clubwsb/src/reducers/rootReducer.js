import { combineReducers } from "redux";
import formReducer from './SignUpFormReducer';

const rootReducer = combineReducers({
    formReducer
});

export default rootReducer;