import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'reducer-form';
import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer,
    form: reduxForm,


});