import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
    (dispatch) => {
        axios.get('/api/current_user')
            .then(res => dispatchEvent({ type: FETCH_USER, payload: res }));
    };

};



export const handleToken = token => async dispatch => {

    const res = await axios.post('/api/stripe', token);
    dispatch({ type: FETCH_USER, payload: res.data });

};


export const submitSurvey = values => async dispatch => {

    const res = await axios.post('/api/surveys', values);

    history.pushState('/surveys');

    dispatch({ type: FETCH_USER, payload: res.data });


};