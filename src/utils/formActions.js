import axios from 'axios';
import { SUBMIT_FORM, SUBMIT_FORM_SUCCESS, SUBMIT_FORM_ERROR } from '../types';

export const submitForm = (formData) => {
  return (dispatch) => {
    dispatch({ type: SUBMIT_FORM });
    axios
      .post('/api/form', formData)
      .then((response) => {
        dispatch({ type: SUBMIT_FORM_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: SUBMIT_FORM_ERROR, error: error });
      });
  };
};